function tableController(tableMetaData) {
    let tableData = [];
    let day = "";
    let tableInfo;

    console.log(tableMetaData);
    fetch("http://localhost:4444/js/models/tableInfo.json")
    .then(promise => promise.json())
    .then(response => tableInfo = response)
    .then(() => console.log(tableInfo));

    console.log(tableInfo);

    for (let i = 0; i < tableMetaData.length; i++) {
        if (tableMetaData[i]['weekId'] === 1) {
            tableData.push(tableMetaData[i].date,tableInfo.monday);
            day = "monday";
        }
        else if (tableMetaData[i].weekId === 2) day = "tuesday";
        else if (tableMetaData[i].weekId === 3) day = "wednesday";
        else if (tableMetaData[i].weekId === 4) day = "thursday";
        else if (tableMetaData[i].weekId === 5) day = "friday";
        else if (tableMetaData[i].weekId === 6 || tableMetaData[i].weekId === 7) day = "";
        //console.log(day);
    }

    /*
    tableData = [
     {tableMetaData: ... , day:day, models/tableInfo.json::monday(for example monday) },
     {...}]
    */
    //send it!
    //tableView(tableData);
}