

function calculateDaysBetweenHours(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var millisecondsPerHour = 1000 * 60 * 60;
    var millisBetween = endDate.getTime() - beginDate.getTime();
    var hours = millisBetween / millisecondsPerHour;
    return Math.floor(hours);
} 


function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = endDate.getTime() - beginDate.getTime();
    var days = millisBetween / millisecondsPerDay;
    return Math.floor(days);
}

function calculateDaysBetweenMinutes(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var millisecondsPerMinute = 1000 * 60;
    var millisBetween = endDate.getTime() - beginDate.getTime();
    var minutes = millisBetween / millisecondsPerMinute;
    return Math.floor(minutes);
}

//获取两个日期间所有的周末日期
function getWeekendDays(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var weekendDays = new Array();
    var i = 0;
    while (beginDate.getTime() <= endDate.getTime()) {
        if (beginDate.getDay() == 0 || beginDate.getDay() == 6) {
            weekendDays[i] = beginDate.toLocaleDateString();
            i++;
        }
        beginDate.setDate(beginDate.getDate() + 1);
    }
    return weekendDays;
}

