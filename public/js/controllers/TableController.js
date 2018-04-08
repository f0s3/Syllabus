/*tableController prepares ALL the data to be shown in tableView.*/
function TableController(weekDays) {
    //let tableData = [];//finalArray, probably will be replaced by object
    fetch(GroupAndSubgroupController())
        .then(promise => promise.json())
        .then(function(response) {
            //adds {text} inside </th>
            for (let weekday = weekDays[0];weekday <= weekDays.length;weekday++) {
                switch (weekday) {
                    case 1:
                        //always shows up when called.
                        $('#table-content')
                            .append("<p id='monday-label'>Понеділок</p>")
                            .append("<table id = 'monday-table'></table>");

                        //shows up only when there is info for filling this tr;
                        $('#monday-table')
                            .attr("border", "1")
                            .append("<tr id='table-headers-monday'></tr>")
                            .append("<tr id='monday-table-item-1'></tr>");
                        //th...
                        $("#table-headers-monday")
                            .append("<th class='lessonId-header'>№</th>")
                            .append("<th class='time-header'>Час</th>")
                            .append("<th class='cabinet-header'>Кабінет</th>")
                            .append("<th class='subject-header'>Предмет</th>");
                        //shows up only when there is info for filling this td; (probably not)
                        $('#monday-table-item-1')
                            .append("<td id='lessonId'></td>")
                            .append("<td id='time'></td>")
                            .append("<td id='cabinet'></td>")
                            .append("<td id='subject'></td>");
                        break;
                    case 2:
                        $('#table-content')
                            .append("<p id='tuesday-label'>Вівторок</p>")
                            .append("<table id = 'tuesday-table'></table>");
                        //shows up only when there is info for filling this tr;
                        $('#tuesday-table')
                            .attr("border", "1")
                            .append("<tr id='table-headers-tuesday'></tr>")
                            .append("<tr id='tuesday-table-item-1'></tr>");
                        //th
                        $("#table-headers-tuesday")
                            .append("<th class='lessonId-header'>№</th>")
                            .append("<th class='time-header'>Час</th>")
                            .append("<th class='cabinet-header'>Кабінет</th>")
                            .append("<th class='subject-header'>Предмет</th>");
                        //shows up only when there is info for filling this td; (probably not)
                        $('#tuesday-table-item-1')
                            .append("<td id='lessonId'></td>")
                            .append("<td id='time'></td>")
                            .append("<td id='cabinet'></td>")
                            .append("<td id='subject'></td>");
                        break;
                    case 3:
                        $('#table-content')
                            .append("<p id='wednesday-label'>Середа</p>")
                            .append("<table id = 'wednesday-table'></table>");
                        //shows up only when there is info for filling this tr;
                        $('#wednesday-table')
                            .attr("border", "1")
                            .append("<tr id='table-headers-wednesday'></tr>")
                            .append("<tr id='wednesday-table-item-1'></tr>");
                        //th
                        $("#table-headers-wednesday")
                            .append("<th class='lessonId-header'>№</th>")
                            .append("<th class='time-header'>Час</th>")
                            .append("<th class='cabinet-header'>Кабінет</th>")
                            .append("<th class='subject-header'>Предмет</th>");
                        //shows up only when there is info for filling this td; (probably not)
                        $('#wednesday-table-item-1')
                            .append("<td id='lessonId'></td>")
                            .append("<td id='time'></td>")
                            .append("<td id='cabinet'></td>")
                            .append("<td id='subject'></td>");
                        break;
                    case 4:
                        $('#table-content')
                            .append("<p id='thursday-label'>Четверг</p>")
                            .append("<table id='thursday-table'></table>");
                        //shows up only when there is info for filling this tr;
                        $('#thursday-table')
                            .attr("border", "1")
                            .append("<tr id='table-headers-thursday'></tr>")
                            .append("<tr id='thursday-table-item-1'></tr>");
                        //th...
                        $("#table-headers-thursday")
                            .append("<th class='lessonId-header'>№</th>")
                            .append("<th class='time-header'>Час</th>")
                            .append("<th class='cabinet-header'>Кабінет</th>")
                            .append("<th class='subject-header'>Предмет</th>");
                        //shows up only when there is info for filling this td; (probably not)
                        $('#thursday-table-item-1')
                            .append("<td id='lessonId'></td>")
                            .append("<td id='time'></td>")
                            .append("<td id='cabinet'></td>")
                            .append("<td id='subject'></td>");
                        break;
                    case 5:
                        $('#table-content')
                            .append("<p id='friday-label'>П'ятниця</p>")
                            .append("<table id = 'friday-table'></table>");
                        //shows up only when there is info for filling this tr;
                        $('#friday-table')
                            .attr("border", "1")
                            .append("<tr id='table-headers-friday'></tr>")
                            .append("<tr id='friday-table-item-1'></tr>");
                        //th...
                        $("#table-headers-friday")
                            .append("<th class='lessonId-header'>№</th>")
                            .append("<th class='time-header'>Час</th>")
                            .append("<th class='cabinet-header'>Кабінет</th>")
                            .append("<th class='subject-header'>Предмет</th>");
                        //shows up only when there is info for filling this td; (probably not)
                        $('#friday-table-item-1')
                            .append("<td id='lessonId1'></td>")
                            .append("<td id='time'></td>")
                            .append("<td id='cabinet'></td>")
                            .append("<td id='subject'></td>");
                        break;
                }
            }


            /*
            //adds new item in table
            let tr = document.createElement("tr");
            let tableItem = document.getElementById("table-headers")
                .parentNode.insertBefore(tr, document.getElementById("table-headers").nextSibling);
            tableItem.setAttribute("id",response["monday"]["dayId"]);


            let td = document.createElement("td");
            let num = document.getElementById("tr1")
                .parentNode.insertBefore(td, document.getElementById("tr1").nextSibling);
            */
            //TableView(tableData);
        });
}