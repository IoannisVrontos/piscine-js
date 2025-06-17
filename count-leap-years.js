function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function countLeapYears(date){
    let count = 0;
    const nowYear = date.getFullYear();
    let years = 1;
    while (years <= nowYear){
        if(isLeapYear(years)){
            count++;
        }
        years++;
    }
    return count;
}

console.log(countLeapYears(new Date('2020-10-10')));