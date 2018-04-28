/*
* @Deprecated!
* */
function TableController(weekDays) {
    fetch(GroupAndSubgroupController())
    .then(promise => promise.json())
    .then(function(response) {
        for (let weekdaysCount = 0;weekdaysCount < weekDays.length;weekdaysCount++) {
            switch (weekDays[weekdaysCount]) {
                case 1:
                    let mon = "monday";
                    $('#table-content')
                        .append("<p id='"+ mon + "-label'>Понеділок</p>")
                        .append("<table id='"+ mon + "-table' class='table-bordered table-responsive-sm'></table>"); //tableView()
                    TableView(mon);
                    for (let i = response[mon]["lessonId"][0];i <= response[mon]["lessonId"].length;i++) {
                        fillWithData(mon, i);
                        $("#" + mon + "-time-" + i).text(response[mon]["time"][i - 1]);
                        $("#" + mon + "-cabinet-" + i).text(response[mon]["cabinet"][i - 1]);
                        $("#" + mon + "-subject-" + i).text(response[mon]["subject"][i - 1]);
                    }
                    break;
                case 2:
                    let tues = "tuesday";
                    $('#table-content')
                        .append("<p id='" + tues + "-label'>Вівторок</p>")
                        .append("<table id='" + tues + "-table' class='table-bordered table-responsive-sm'></table>");
                    TableView(tues);
                    for (let i = response[tues]["lessonId"][0];i <= response[tues]["lessonId"].length;i++) {
                        fillWithData(tues, i);
                        $("#" + tues + "-time-" + i).text(response[tues]["time"][i - 1]);
                        $("#" + tues + "-cabinet-" + i).text(response[tues]["cabinet"][i - 1]);
                        $("#" + tues + "-subject-" + i).text(response[tues]["subject"][i - 1]);
                    }
                    break;
                case 3:
                    let wednes = "wednesday";
                    $('#table-content')
                        .append("<p id='" + wednes + "-label'>Середа</p>")
                        .append("<table id='" + wednes + "-table' class='table-bordered table-responsive-sm'></table>");
                    TableView(wednes);
                    for (let i = response[wednes]["lessonId"][0];i <= response[wednes]["lessonId"].length;i++) {
                        fillWithData(wednes, i);
                        $("#" + wednes + "-time-" + i).text(response[wednes]["time"][i - 1]);
                        $("#" + wednes + "-cabinet-" + i).text(response[wednes]["cabinet"][i - 1]);
                        $("#" + wednes + "-subject-" + i).text(response[wednes]["subject"][i - 1]);
                    }
                    break;
                case 4:
                    let thurs = "thursday";
                    $('#table-content')
                        .append("<p id='" + thurs + "-label'>Четверг</p>")
                        .append("<table id='" + thurs + "-table' class='table-bordered table-responsive-sm'></table>");
                    TableView(thurs);
                    for (let i = response[thurs]["lessonId"][0];i <= response[thurs]["lessonId"].length;i++) {
                        fillWithData(thurs, i);
                        $("#" + thurs + "-time-" + i).text(response[thurs]["time"][i - 1]);
                        $("#" + thurs + "-cabinet-" + i).text(response[thurs]["cabinet"][i - 1]);
                        $("#" + thurs + "-subject-" + i).text(response[thurs]["subject"][i - 1]);
                    }
                    break;
                case 5:
                    let fri = "friday";
                    $('#table-content')
                        .append("<p id='" + fri + "-label'>П'ятниця</p>")
                        .append("<table id='" + fri + "-table' class='table-bordered table-responsive-sm'></table>");
                    TableView(fri);
                    for (let i = response[fri]["lessonId"][0];i <= response[fri]["lessonId"].length;i++) {
                        fillWithData(fri, i);
                        $("#" + fri + "-time-" + i).text(response[fri]["time"][i - 1]);
                        $("#" + fri + "-cabinet-" + i).text(response[fri]["cabinet"][i - 1]);
                        $("#" + fri + "-subject-" + i).text(response[fri]["subject"][i - 1]);
                    }
                    break;
            }
        }
    });
}
function fillWithData(day, i) {
    $("#table-body-" + day).append("<tr id='" + day + "-table-item-'></tr>");
    $("#" + day + "-table-item-").attr("id", day + "-table-item-" + i);
    $("#" + day + "-table-item-" + i)
        .append("<td id='" + day + "-lessonId-"+ i + "'></td>")
        .append("<td id='" + day + "-time-" + i + "'></td>")
        .append("<td id='" + day + "-cabinet-" + i + "'></td>")
        .append("<td id='" + day + "-subject-" + i + "'></td>");
    $("#" + day + "-lessonId-" + i).text(i);
}