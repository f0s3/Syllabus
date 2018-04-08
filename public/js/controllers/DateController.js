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
            if (!fromDateYearFull % 4 === 0) monthEnding = 28;
            else {monthEnding = 29;}
            break;
    }
    //getting the range of weekDays
    if ((fromDateMonth === toDateMonth) || (monthEnding - parseInt(fromDateDay) >= 7)) {
        for (let selectedDay = parseInt(fromDateDay);selectedDay <= parseInt(toDateDay);selectedDay++) {
            createArrayWithWeekdays(selectedDay);
        }
    } else if (parseInt(fromDateMonth) < parseInt(toDateMonth) &&
        (monthEnding - parseInt(fromDateDay) < 7)) {
        for (let selectedDay = parseInt(fromDateDay);selectedDay <= monthEnding;selectedDay++) {
            createArrayWithWeekdays(selectedDay);
        }
        for (let selectedDay = 1;selectedDay <= parseInt(toDateDay);selectedDay++) {
            let selectedDayStr = selectedDay.toString();
            if (selectedDayStr.length === 1) selectedDayStr = '0' + selectedDayStr;
            let selectedDate = new Date(toDateYearFull + '-' + toDateMonth + '-' + selectedDayStr);
            if (!(selectedDate.getDay() === 6) &&
                !(selectedDate.getDay() === 0) &&
                (weekDays.length < 5)) {
                weekDays.push(selectedDate.getDay());
            }
        }
    }

    function createArrayWithWeekdays(selectedDay) {
        let selectedDayStr = selectedDay.toString();
        if (selectedDayStr.length === 1) selectedDayStr = '0' + selectedDayStr;
        let selectedDate = new Date(fromDateYearFull + '-' + fromDateMonth + '-' + selectedDayStr);
        if (!(selectedDate.getDay() === 6) &&
            !(selectedDate.getDay() === 0) &&
            (weekDays.length < 5))
            weekDays.push(selectedDate.getDay());
    }

    //sort the range of weekDays
    function quickSort(weekDays) {
        if (weekDays.length <= 1) {
            return weekDays;
        } else {
            let left = [];
            let right = [];
            let newArray = [];
            let pivot = weekDays.pop();
            for (let i = 0; i < weekDays.length; i++) {
                if (weekDays[i] <= pivot) {
                    left.push(weekDays[i]);
                } else {
                    right.push(weekDays[i]);
                }
            }
            return newArray.concat(quickSort(left), pivot, quickSort(right));
        }
    }
    TableController(quickSort(weekDays));
}