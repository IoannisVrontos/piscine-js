// accepts a Date, and returns false if the Date is invalid.
function isValid(d) {
  return d instanceof Date && !isNaN(d);
}

// accepts two Date arguments, and returns true if the first is greater then the second.
function isAfter(d1 = new Date(),d2 = new Date()){
    return d1 > d2
}

// accepts two Date arguments, and returns true if the second is greater than the first.
function isBefore(d1 = new Date(),d2 = new Date()){
    return d1 < d2
}

// accepts a Date, and returns true if the Date is valid, and is after than the present date.
function isFuture(d){
    return (isValidDate(d) && isAfter(d,now = new Date()))
}

// accepts a Date, and returns true if the Date is valid, and is before the present date.
function isPast(d){
    return (isValidDate(d) && isBefore(d,now = new Date()))
}
