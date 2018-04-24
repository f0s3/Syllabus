function DateController(fromDateValue, toDateValue) {
    //for from-date
    let fromDate = new Date(fromDateValue);
    let fromDateYearFull = fromDate.getFullYear().toString();
    let fromDateMonth = (fromDate.getMonth() + 1).toString();
    if (fromDateMonth.length === 1) fromDateMonth = '0' + fromDateMonth;
    let fromDateDay = (fromDate.getDate()).toString();
    if (fromDateDay.length === 1) fromDateDay = '0' + fromDateDay;
    //for to-date
    let toDate = new Date(toDateValue);
    let toDateYearFull = fromDate.getFullYear().toString();
    let toDateMonth = (toDate.getMonth() + 1).toString();
    if (toDateMonth.length === 1) toDateMonth = '0' + toDateMonth;
    let toDateDay = (toDate.getDate()).toString();
    if (toDateDay.length === 1) toDateDay = '0' + toDateDay;
    let monthEnding;
    switch (fromDateMonth) {
        case '01':case '03':
        case '05':case '07':
        case '08':case '10':
        case '12':
            monthEnding = 31;break;
        case '04':case '06':
        case '09':case '11':
            monthEnding = 30;break;
        case '02':
            switch (parseInt(fromDateYearFull) % 4) {
                case 0:monthEnding = 29;break;
                default:monthEnding = 28;break;
            }
    }
    let weekDays = [];//final array
    if ((parseInt(fromDateMonth) === parseInt(toDateMonth))) {
        for (let selectedDay = parseInt(fromDateDay);selectedDay <= parseInt(toDateDay);selectedDay++) {
            addDataToTheArrayWithWeekdays(selectedDay, "from");
        }
    } else if (parseInt(fromDateYearFull) === parseInt(toDateYearFull) &&
        parseInt(fromDateMonth) === parseInt(toDateMonth) - 1 ||
        (fromDateMonth === '12' &&
            toDateMonth === '01')) {
        for (let selectedDay = parseInt(fromDateDay);selectedDay <= monthEnding;selectedDay++) {
            addDataToTheArrayWithWeekdays(selectedDay, "from");
        }
        for (let selectedDay = 1;selectedDay <= parseInt(toDateDay);selectedDay++) {
            addDataToTheArrayWithWeekdays(selectedDay, "to");
        }
    }
    weekDays.sort((a, b) => {return a - b});
    removeSameElements(weekDays);
    function addDataToTheArrayWithWeekdays(selectedDay,fromOrTo) {
        let selectedDayStr = selectedDay.toString();
        if (selectedDayStr.length === 1) selectedDayStr = '0' + selectedDayStr;
        let selectedDate;
        switch (fromOrTo) {
            case "from":selectedDate = new Date(fromDateYearFull + '-' + fromDateMonth + '-' + selectedDayStr);break;
            case "to":selectedDate = new Date(toDateYearFull + '-' + toDateMonth + '-' + selectedDayStr);break;
        }
        if (weekDays.length < 5 && !(selectedDate.getDay() === 6) && !(selectedDate.getDay() === 0))
            weekDays.push(selectedDate.getDay());
    }
    function removeSameElements(weekDays) {
        for (let i = 0;i < weekDays.length;i++)
            if (weekDays[i - 1] === weekDays[i]) weekDays = weekDays.filter(item => item !== 3);
    }
    TableController(weekDays);
}