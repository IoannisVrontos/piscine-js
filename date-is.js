function isValid(date) {
  if (typeof date === "number") {
    return isFinite(date);
  }
  if (date instanceof Date) {
    return !isNaN(date.getTime());
  }
  return false;
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
