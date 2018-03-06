function tableController(tableMetaData) {
    let tableData = [];
    //prepare data for sending, format and send it
    for (let i = 0; i < tableMetaData.length; i++) {
        //tableData[i].id = i+1;
        if (tableMetaData[i].weekId === 1) {
            tableData.push('{monday:tableInfo.monday}');
        } else if (tableMetaData[i].weekId === 2) {
            tableData.push('{tuesday:tableInfo.tuesday}');
        } else if (tableMetaData[i].weekId === 3) {
            tableData.push('{wednesday:tableInfo.wednesday}');
        } else if (tableMetaData[i].weekId === 4) {
            tableData.push('{thursday:tableInfo.thursday}');
        } else if (tableMetaData[i].weekId === 5) {
            tableData.push('{friday:tableInfo.friday}');
        }/* else if (tableMetaData[i].weekId === 6) {
            tableMetaData[i].pop();
        } else if (tableMetaData[i].weekId === 7) {
            tableMetaData[i].pop();
        }*/
    }
    //send it!
    tableView(tableData);
}