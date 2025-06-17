function dayOfTheYear(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);

  const diffInMilliseconds = date - startOfYear;

  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;

  const dayNumber = Math.floor(diffInMilliseconds / oneDayInMilliseconds) + 1;

  return dayNumber;
}