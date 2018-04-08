/*tableController prepares ALL the data to be shown in tableView.*/
function TableController(weekDays) {
    let tableData = [];//finalArray, probably will be replaced by object
    //todo:get all data and create final object

    fetch(GroupAndSubgroupController())
        .then(promise => promise.json())
        .then(function(response) {
            for (let weekday = weekDays[0];weekday <= weekDays.length;weekday++) {
                switch (weekday) {
                    case 1:console.log(response["monday"]);break;
                    case 2:console.log(response["tuesday"]);break;
                    case 3:console.log(response["wednesday"]);break;
                    case 4:console.log(response["thursday"]);break;
                    case 5:console.log(response["friday"]);break;
                }
            }

            document.getElementById("table").setAttribute("border", "1");
            document.getElementById("table-item-data").innerText = "test123123";
            //adds {text} inside </th>
            document.getElementById("num-header").innerText = "№";
            document.getElementById("time-header").innerText = "Час";
            document.getElementById("cabinet-header").innerText = "Кабінет";
            document.getElementById("subject-header").innerText = "Предмет";
            /*
            //adds new item in table
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let tableItem = document.getElementById("table-headers")
                .parentNode.insertBefore(tr, document.getElementById("table-headers").nextSibling);
            tableItem.setAttribute("id","tr1");
            let num = document.getElementById("tr1")
                .parentNode.insertBefore(td, document.getElementById("tr1").nextSibling);
            */
            //document.getElementById("table-content").innerHTML = JSON.stringify(response);
        });

    TableView(tableData);
}