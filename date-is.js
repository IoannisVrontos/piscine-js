// accepts a Date, and returns false if the Date is invalid.
function isValid(d) {
   return !isNaN(+new Date(d));
}

function isAfter(d1, d2){
    return new Date(d1) > new Date(d2);
}

function isBefore(d1, d2){
    return new Date(d1) < new Date(d2);
}

// accepts a Date, and returns true if the Date is valid, and is after than the present date.
function isFuture(d){
    return isValid(d) && isAfter(d, new Date());
}

function isPast(d){
    return isValid(d) && isBefore(d, new Date());
}

