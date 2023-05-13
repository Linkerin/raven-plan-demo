/**
 * Checks whether date format input is correct and returns its' splitted version
 * @param {string} format Date format. Example: `'dd.mm.yyyy'`

 * @returns {string[]} Format parts in the array splitted by the separator
 * @throws {Error} An error `Invalid date format` when the format doesn't include year, month and day
 * @example
 * checkFormat('dd/mm/yyyy')
 * // returns
 * ['dd', 'mm', 'yyyy']
 */
const checkFormat = format => {
  const regex = /-|\.|\//;
  const formatSet = new Set(format.split(regex));

  if (formatSet.size !== 3) {
    throw new Error(`Invalid date format '${format}'`);
  }

  const splittedFormat = Array.from(formatSet);
  return splittedFormat;
};

/**
 * Checks that separators in the date format string are the same
 * and returns the separator value
 * @param {string} format Date format. Example: `'dd.mm.yyyy'`
 * @param {string[]} splitted Splitted values of date format
 *                            returned by `checkFormat` function
 * @see checkFormat
 * @returns {string} Date separator
 * @throws {Error} An error `Different separators` when separators are not the same
 * @example
 * getDateSeparator('dd.mm.yyyy', ['dd', 'mm', 'yyyy'])
 * // returns
 * '.'
 */
const getDateSeparator = (format, splitted) => {
  const sep = format[splitted[0].length];
  const secondSep = format[splitted[0].length + splitted[1].length + 1];
  if (sep !== secondSep) {
    throw new Error(
      `Different separators used in the date format: '${sep}' and '${secondSep}'`
    );
  }
  return sep;
};

/**
 * Presents a `Date` objects as a `string` according to the stated `format`
 * @param {Date} date Target date
 * @param {string} format Date format. Example: `'dd.mm.yyyy'`
 * @returns {string} String representation of the date.
 * @example
 * dateStringFormatter(new Date(), 'yyyy/mm/dd') // current date is October 4th, 2021
 * // returns
 * '2021/10/04'
 * @throws {Error} An error `Invalid date` if `date` parameter is not a valid `Date` object
 * @throws {Error} An error `Invalid date format` if `format` doesn't consist of
 *                 `'dd'`, `'mm'` and `'yyyy'` parts
 */
export const dateStringFormatter = (dateStr, format) => {
  const date = new Date(dateStr);
  if (date === null) return '';

  if (!(date instanceof Date)) {
    throw new Error(
      `Invalid date '${date}' was provided for string formatting`
    );
  }

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (!year || !month || !day) {
    throw new Error(
      `Invalid date '${date}' was provided for string formatting`
    );
  }

  month = `${month}`.padStart(2, '0');
  day = `${day}`.padStart(2, '0');

  if (!format) format = 'dd/mm/yyyy';
  const splittedFormat = checkFormat(format);

  let sep = getDateSeparator(format, splittedFormat);

  let formattedDateString = '';
  for (let i = 0; i < splittedFormat.length; i++) {
    if (i === 2) sep = '';
    switch (splittedFormat[i]) {
      case 'dd':
        formattedDateString += `${day}${sep}`;
        break;

      case 'mm':
        formattedDateString += `${month}${sep}`;
        break;

      case 'yyyy':
        formattedDateString += `${year}${sep}`;
        break;

      default:
        throw new Error(
          `Invalid date format '${format}' was provided for string formatting`
        );
    }
  }
  return formattedDateString;
};

export default dateStringFormatter;
