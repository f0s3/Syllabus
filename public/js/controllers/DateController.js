/*
* dateController checks the date entered and prepares it.
* returns and array of days needed to be reflected on table itself.
* */
function DateController(fromDateValue, toDateValue) {
    let fromDate = new Date(fromDateValue);
    let toDate = new Date(toDateValue);
    //for from-date
    let fromDateYearFull = fromDate.getFullYear().toString();
    let fromDateMonth = (fromDate.getMonth() + 1).toString();
    if (fromDateMonth.length === 1) fromDateMonth = '0' + fromDateMonth;
    let fromDateDay = (fromDate.getDate()).toString();
    if (fromDateDay.length === 1) fromDateDay = '0' + fromDateDay;
    //for to-date
    let toDateYearFull = fromDate.getFullYear().toString();
    let toDateMonth = (toDate.getMonth() + 1).toString();
    if (toDateMonth.length === 1) toDateMonth = '0' + toDateMonth;
    let toDateDay = (toDate.getDate()).toString();
    if (toDateDay.length === 1) toDateDay = '0' + toDateDay;
    let weekDays = [];//final array
    let monthEnding;
    switch (fromDateMonth) {
        case '01':case '03':
        case '05':case '07':
        case '08':case '10':
        case '12':
            monthEnding = 31;
            break;
        case '04':case '06':
        case '09':case '11':
            monthEnding = 30;
            break;
        case '02':
            if (fromDateYearFull % 4 === 0) monthEnding = 29;
            else {monthEnding = 28;}
            break;
    }
    //getting the range of weekDays
    if ((parseInt(fromDateMonth) === parseInt(toDateMonth)) || (monthEnding - parseInt(fromDateDay) >= 5)) {
        for (let selectedDay = parseInt(fromDateDay);selectedDay <= parseInt(toDateDay);selectedDay++) {
            createArrayWithWeekdays(selectedDay);
        }
    } else if (parseInt(fromDateMonth) < parseInt(toDateMonth) &&
        (monthEnding - parseInt(fromDateDay) < 5)) {
        for (let selectedDay = parseInt(fromDateDay);selectedDay <= monthEnding;selectedDay++) {
            createArrayWithWeekdays(selectedDay);
        }
        //f#ck. who has written such a bad code? it was bad idea to try new drugs :/ (jk)
        for (let selectedDay = 1;selectedDay <= parseInt(toDateDay);selectedDay++) {
            let selectedDayStr = selectedDay.toString();
            if (selectedDayStr.length === 1) selectedDayStr = '0' + selectedDayStr;
            let selectedDate = new Date(toDateYearFull + '-' + toDateMonth + '-' + selectedDayStr);
            if (!(selectedDate.getDay() === 6) &&
                !(selectedDate.getDay() === 0) &&
                (weekDays.length <= 5)) {
                weekDays.push(selectedDate.getDay());
            }
        }
    }
    sort(weekDays);
    removeSameElements(weekDays);
    function createArrayWithWeekdays(selectedDay) {
        let selectedDayStr = selectedDay.toString();
        if (selectedDayStr.length === 1) selectedDayStr = '0' + selectedDayStr;
        let selectedDate = new Date(fromDateYearFull + '-' + fromDateMonth + '-' + selectedDayStr);
        if (weekDays.length < 5 && !(selectedDate.getDay() === 6) && !(selectedDate.getDay() === 0))
            weekDays.push(selectedDate.getDay());
    }
    //sort the range of weekDays
    function sort(weekDays) {
        weekDays.sort((a, b) => {return a - b});
    }
    //code works without this func but still let it be here just in case
    function removeSameElements(weekDays) {
        for (let i = 0;i < weekDays.length;i++) {
            if (weekDays[i - 1] === weekDays[i])
                weekDays = weekDays.filter(item => item !== 3);
        }
    }
    TableController(weekDays);
}