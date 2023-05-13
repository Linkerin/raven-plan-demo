/**
 * Returns days from the previous month that should be displayed
 * @param {Date} date Date object of the currently selected month
 * @param {boolean} startSunday Defines whether the week should start
 *                              with Sunday (`true`) or Monday (`false`)
 * @returns {object[]} Return an array of previous month day objects
 * @example
 * // return example
 * [{ day: 30, month: 'prev' } , { day: 31, month: 'prev }]
 */
const daysFromPrevMonth = (date, startSunday) => {
  const monthFirstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  if (!(monthFirstDay instanceof Date) || !monthFirstDay.valueOf()) {
    throw new Error(
      `Invalid date value '${date}' provided for extracting days of previous month`
    );
  }

  const weekday = monthFirstDay.getDay();
  let numOfPrevMonthDays = weekday;
  let prevMonthDays = [];

  if (!startSunday) {
    switch (weekday) {
      case 0:
        numOfPrevMonthDays = 6;
        break;

      default:
        numOfPrevMonthDays = weekday - 1;
        break;
    }
  }

  if (numOfPrevMonthDays) {
    for (
      let lastMonthDays = daysInMonth(
        monthFirstDay.getFullYear(),
        date.getMonth() - 1
      );
      numOfPrevMonthDays > 0;
      numOfPrevMonthDays--, lastMonthDays--
    ) {
      prevMonthDays.unshift({ day: lastMonthDays, month: 'prev' });
    }
  }
  return prevMonthDays;
};

/**
 * Returns days from the next month that should be displayed
 * @param {Date} date Date object of the currently selected month
 * @param {boolean} startSunday Defines whether the week should start
 *                              with Sunday (`true`) or Monday (`false`)
 * @returns {object[]} Return an array of previous month day objects
 * @example
 * // return example
 * [{ day: 1, month: 'next' } , { day: 2, month: 'next }]
 */
const daysFromNextMonth = (date, startSunday) => {
  const nextMonthFirstDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  );
  if (!(nextMonthFirstDay instanceof Date) || !nextMonthFirstDay.valueOf()) {
    throw new Error(
      `Invalid date value '${date}' provided for extracting days of previous month`
    );
  }
  const weekday = nextMonthFirstDay.getDay();
  let numOfNextMonthDays;
  let nextMonthDays = [];

  if (startSunday) {
    switch (weekday) {
      case 0:
        numOfNextMonthDays = 0;
        break;

      default:
        numOfNextMonthDays = 7 - weekday;
        break;
    }
  } else {
    switch (weekday) {
      case 0:
        numOfNextMonthDays = 1;
        break;

      case 1:
        numOfNextMonthDays = 0;
        break;

      default:
        numOfNextMonthDays = 7 - (weekday - 1);
        break;
    }
  }

  for (let i = 1; i <= numOfNextMonthDays; i++) {
    nextMonthDays.push({ day: i, month: 'next' });
  }

  return nextMonthDays;
};

/**
 * Months names in different locales
 * @property {string} en - English
 * @property {string} ru - Russian
 * @property {string} de - German
 * @property {string} fr - French
 * @property {string} es - Spanish
 * @property {string} pt - Portuguese
 * @property {string} it - Italian
 */
export const monthNames = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ],
  de: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ],
  fr: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  es: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  pt: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  it: [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
  ]
};

/**
 * Week days abbreviations for different locales.
 * @see getWeekDays
 */
const weekDays = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  fr: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  es: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  pt: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  it: ['dom.', 'lun.', 'mar.', 'mer.', 'gio.', 'ven.', 'sab.']
};

/**
 * Returns an array with week days abbreviations
 * @param {string} locale Week day locale
 * @param {boolean} startSunday Defines whether the week should start
 *                              with Sunday (`true`) or Monday (`false`)
 * @returns {Array}
 */
export const getWeekDays = (locale, startSunday) => {
  let days;
  if (weekDays[locale]) {
    days = Array.from(weekDays[locale]);
  } else {
    days = Array.from(weekDays.en);
  }

  if (!startSunday) {
    const sunday = days.shift();
    days.push(sunday);
  }

  return days;
};

/**
 * Returns the number of days in a month
 * @param {number} year Year of the target month
 * @param {number} month Target month
 * @returns {number} Number of days
 * @example
 * daysInMonth(2021, 9)
 * // returns
 * 31
 */
export const daysInMonth = (year, month) => {
  const dayInMs = 1000 * 60 * 60 * 24;
  const nextMonthFirstDay = new Date(year, month + 1, 1);
  return new Date(nextMonthFirstDay - dayInMs).getDate();
};

/**
 * Creates an object that contains target `date`, it's `month` and `year` numbers
 * and a sorted array of month's days
 * @param {Date} [date] Target date from `DatePicker`'s state. If not specified, current date is used.
 * @param {boolean} startSunday Defines whether the week should start
 *                              with Sunday (`true`) or Monday (`false`)
 * @returns {object} Calendar info for a target month
 * @example
 * // returns
 * {
 *   date: 2021-10-05T08:14:54.962Z, // `Date` object,
 *   year: 2021,
 *   month: 9,
 *   days: [{ day: 30, month: 'prev' }, { day: 1, month: 'current' }] // etc.
 * }
 */
export const createCalendar = (startSunday, date) => {
  if (!date) date = new Date();
  const numOfDaysInMonth = daysInMonth(date.getFullYear(), date.getMonth());
  if (!numOfDaysInMonth) {
    throw new Error(
      `Invalid date value '${date}' provided for creating a calendar`
    );
  }

  let days = daysFromPrevMonth(date, startSunday);

  for (let day = 1; day <= numOfDaysInMonth; day++) {
    days.push({ day: day, month: 'current' });
  }

  const nextMonthDays = daysFromNextMonth(date, startSunday);
  if (nextMonthDays.length > 0) {
    days = [...days, ...nextMonthDays];
  }

  const calendar = {
    date: date,
    year: date.getFullYear(),
    month: date.getMonth(),
    days: days
  };

  return calendar;
};

const ut = {
  createCalendar,
  getWeekDays,
  monthNames
};

export default ut;
