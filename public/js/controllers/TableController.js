function tableController(tableMetaData) {
    let tableData = [];
    let day = "";
    //prepare data for sending, format and send it
    for (let i = 0; i < tableMetaData.length; i++) {
        if (tableMetaData[i].weekId === 1) day = "monday";
        else if (tableMetaData[i].weekId === 2) day = "tuesday";
        else if (tableMetaData[i].weekId === 3) day = "wednesday";
        else if (tableMetaData[i].weekId === 4) day = "thursday";
        else if (tableMetaData[i].weekId === 5) day = "friday";
        else if (tableMetaData[i].weekId === 6 || tableMetaData[i].weekId === 7) {}
    }
    //send it!
    /*example of data
    [
        {weekId:3,date:'18-03-04',wednesday:{}},
        {weekId:4,date:'18-03-05',thursday:{}},
    ]
    * */
    fetch('http://localhost:4444/js/models/tableInfo.json')
        .then((promise) => promise.json())
        .then((res) => console.log(JSON.stringify(res[day]) + "day: " + day));
    tableView(tableData);
}