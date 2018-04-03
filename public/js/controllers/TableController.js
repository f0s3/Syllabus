/*
* tableController prepares ALL the data to be shown in tableView.
* */
function TableController() {
    let tableData = [];
    /*
    let linkToJSON = "http://localhost:4444/js/models/test.json";
    fetch(linkToJSON)
        .then(promise => promise.json())
        .then(response => console.log(response));
    for (let i = 0; i < tableMetaData.length; i++) {
        if (tableMetaData[i]['weekId'] === 1) tableData.push(tableMetaData[i]);
        else if (tableMetaData[i].weekId === 2) tableData.push(tableMetaData[i]);
        else if (tableMetaData[i].weekId === 3) tableData.push(tableMetaData[i]);
        else if (tableMetaData[i].weekId === 4) tableData.push(tableMetaData[i]);
        else if (tableMetaData[i].weekId === 5) tableData.push(tableMetaData[i]);
        else if (tableMetaData[i].weekId === 6 || tableMetaData[i].weekId === 7) {}
    }
    */


    TableView(tableData);
}