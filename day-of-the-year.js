function dayOfTheYear(date) {
  const startOfYear = new Date();
  startOfYear.setFullYear(date.getFullYear());
  startOfYear.setMonth(0);
  startOfYear.setDate(0);

  const diffInMilliseconds = date - startOfYear;

  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;

  const dayNumber = Math.floor(diffInMilliseconds / oneDayInMilliseconds) + 1;

  return dayNumber;
}
