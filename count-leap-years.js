function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function countLeapYears(date){
    let count = 0;
    const dateYear = date.getFullYear();
    let year = 1;
    while (year < dateYear){
        if(isLeapYear(year)){
            count++;
        }
        year++;
    }
    return count;
}