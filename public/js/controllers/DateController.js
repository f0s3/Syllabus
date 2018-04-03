/*
* dateController checks the date entered and prepares it.
* returns and array of days needed to be reflected on table itself.
* */
function DateController(fromDateValue, toDateValue) {
    let fromDate = new Date(fromDateValue);
    let toDate = new Date(toDateValue);

    //for to-date
    let toDateMonth = (toDate.getMonth() + 1).toString();
    if (toDateMonth.length === 1) toDateMonth = '0' + toDateMonth;
    let toDateDay = (toDate.getDate()).toString();
    if (toDateDay.length === 1) toDateDay = '0' + toDateDay;

    //for from-date
    let fromDateYearFull = fromDate.getFullYear().toString();
    let fromDateMonth = (fromDate.getMonth() + 1).toString();
    if (fromDateMonth.length === 1) fromDateMonth = '0' + fromDateMonth;
    let fromDateDay = (fromDate.getDate()).toString();
    if (fromDateDay.length === 1) fromDateDay = '0' + fromDateDay;

    let tableMetaData = [];

    //this whole if-else logic needs to be rebuilt somehow
    if (fromDateMonth === toDateMonth) {
        for (let selectedDay = parseInt(fromDateDay);selectedDay <= parseInt(toDateDay);selectedDay++) {
            let selectedDayStr = selectedDay.toString();
            if (selectedDayStr.length === 1) selectedDayStr = '0' + selectedDayStr;
            let selectedDateStr = fromDateYearFull + '-' + fromDateMonth + '-' + selectedDayStr;
            let selectedDate = new Date(selectedDateStr);
            let weekId = selectedDate.getDay();
            tableMetaData.push({"weekId":weekId,"date":selectedDate.toDateString()});
        }
    } else if (fromDateMonth === toDateMonth - 1 && fromDateMonth < toDateMonth) {
        function differentMonthsCounter(monthEnding) {
            let i = 1;
            while (fromDateDay.parseInt !== monthEnding) tableMetaData.push(fromDateDay);
            while (i < toDateDay) tableMetaData.push(i);
        }
        let monthEnding;
        switch (fromDateMonth) {
            case '01':case '03':
            case '05':case '07':
            case '08':case '10':
            case '12':
                monthEnding = 31;
                differentMonthsCounter(monthEnding);
                break;//january
            case '02':
                monthEnding = 28;
                differentMonthsCounter(monthEnding);
                break;//february
            case '04':case '06':
            case '09':case '11':
                monthEnding = 30;
                differentMonthsCounter(monthEnding);
                break;//november
        }
    }
    TableController(tableMetaData);
}