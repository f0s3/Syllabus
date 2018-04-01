function tableController(tableMetaData) {
    let tableData = [];
    let day = "";
    console.log(tableMetaData);
    fetch("http://localhost:4444/js/models/test.json")
        .then(promise => promise.json())
        .then(response => console.log(response));
    for (let i = 0; i < tableMetaData.length; i++) {
        if (tableMetaData[i]['weekId'] === 1) {
            day = "monday";
            tableData.push(day,tableMetaData[i]);
        }
        else if (tableMetaData[i].weekId === 2) day = "tuesday";
        else if (tableMetaData[i].weekId === 3) day = "wednesday";
        else if (tableMetaData[i].weekId === 4) day = "thursday";
        else if (tableMetaData[i].weekId === 5) day = "friday";
        else if (tableMetaData[i].weekId === 6 || tableMetaData[i].weekId === 7) day = "";
        console.log(day);
    }
    //send it!
    tableView(tableData);
}