function addWeek(d = new Date()){
    const dateNum = d.getDate()

    const days = ["Sunday", "Monday", 
        "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday"];

    const dayToStr = days[d.getDay()];

    if ((dateNum%14)<=7){
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