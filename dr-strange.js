function addWeek(d = new Date()){
    const dateNum = d.getDate()

    console.log(d.getDate())

    const days = ["Sunday", "Monday", 
        "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday"];

    const baseDate = new Date('0001-01-01');
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysPassed = (Math.floor((d - baseDate) / msPerDay))+1;

    const dayToStr = days[d.getDay()];

    if (((daysPassed%14)<=7) && (daysPassed%14>0)){
        return dayToStr;
    } else {
        return "second"+dayToStr;
    };
}



function timeTravel(obj = {}){
    obj.date.setHours(obj.hour);
    obj.date.setMinutes(obj.minute);
    obj.date.setSeconds(obj.second);
    return obj.date.toString()
}