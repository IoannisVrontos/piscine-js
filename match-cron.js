
function matchCron(cronString, date) {
  const [minuteCron, hourCron, dayOfMonthCron, monthCron, dayOfWeekCron] = cronString.split(' ');

  const dateMinute = date.getMinutes();
  const dateHour = date.getHours();
  const dateDayOfMonth = date.getDate();
  const dateMonth = date.getMonth() + 1; 
  
  let dateDayOfWeek = date.getDay();
  if (dateDayOfWeek === 0) {
    dateDayOfWeek = 7; 
  }

  const checkPart = (pattern, value) => {
    return pattern === '*' || parseInt(pattern, 10) === value;
  };

  return (
    checkPart(minuteCron, dateMinute) &&
    checkPart(hourCron, dateHour) &&
    checkPart(dayOfMonthCron, dateDayOfMonth) &&
    checkPart(monthCron, dateMonth) &&
    checkPart(dayOfWeekCron, dateDayOfWeek)
  );
}