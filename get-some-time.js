
function firstDayWeek(weekNumber, yearString) {
  const year = parseInt(yearString, 10);

  if (isNaN(year) || !Number.isInteger(weekNumber) || weekNumber < 1 || weekNumber > 53) {
    return 'Invalid input. Please provide a week number (1-53) and a valid year.';
  }

  const firstDayOfYear = new Date(0);
  firstDayOfYear.setUTCHours(0, 0, 0, 0);
  firstDayOfYear.setUTCFullYear(year, 0, 1);

  const dayOfWeek = firstDayOfYear.getUTCDay();

  const daysToSubtract = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;

  const mondayOfFirstWeek = new Date(firstDayOfYear);
  mondayOfFirstWeek.setUTCDate(firstDayOfYear.getUTCDate() - daysToSubtract);

  const targetMonday = new Date(mondayOfFirstWeek);
  targetMonday.setUTCDate(mondayOfFirstWeek.getUTCDate() + (weekNumber - 1) * 7);

  const formatDate = (date) => {
    const fullYear = date.getUTCFullYear();
    const yearStr = String(fullYear).padStart(4, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${day}-${month}-${yearStr}`;
  };

  if (targetMonday.getUTCFullYear() < year) {
    return formatDate(firstDayOfYear);
  } else {
    return formatDate(targetMonday);
  }
}

