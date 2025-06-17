
function isValid(date) {
  return !isNaN(date.getTime());
}

function isAfter(date, dateToCompare) {
  return date > dateToCompare;
}

function isBefore(date, dateToCompare) {
  return date < dateToCompare;
}

function isFuture(date) {
  return isValid(date) && isAfter(date, new Date());
}

function isPast(date) {
  return isValid(date) && isBefore(date, new Date());
}