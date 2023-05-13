/**
 * Calculates hour and minute numbers for clock widget
 * @returns {object} An object containing hour and minute values
 * @param {string} hour Current hour string representation - zero leading number
 * @param {string} min Current minute string representation - zero leading number
 * @example
 * { hour: '21', min: '04' }
 */
export const clock = () => {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, '0');
  const min = `${now.getMinutes()}`.padStart(2, '0');

  return { hour, min };
};

export default clock;
