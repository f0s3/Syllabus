function TableController(weekDays) {
    fetch(GroupAndSubgroupController())
        .then(promise => promise.json())
        .then(function(response) {
            for (let weekdaysCount = 0;weekdaysCount < weekDays.length;weekdaysCount++) {
                switch (weekDays[weekdaysCount]) {
                    case 1:
                        //logic of tableView() - create an empty table.
                        $('#table-content')
                            .append("<p id='monday-label'>Понеділок</p>")
                            .append("<table id='monday-table' class='table-bordered table-responsive-sm'></table>"); //tableView()
                        TableView("monday");
                        //fill with data
                        for (let i = response["monday"]["lessonId"][0];i <= response["monday"]["lessonId"].length;i++) {
                            $("#table-body-monday").append("<tr id='monday-table-item-'></tr>");
                            $("#monday-table-item-").attr("id", "monday-table-item-" + i);
                            $("#monday-table-item-" + i)
                                .append("<td id='monday-lessonId-'></td>")
                                .append("<td id='monday-time-'></td>")
                                .append("<td id='monday-cabinet-'></td>")
                                .append("<td id='monday-subject-'></td>");
                            $("#monday-lessonId-").attr("id", "monday-lessonId-" + i);
                            $("#monday-lessonId-" + i).text(i);
                            $("#monday-time-").attr("id", "monday-time-" + i);
                            $("#monday-time-" + i).text(response["monday"]["time"][i - 1]);
                            $("#monday-cabinet-").attr("id", "monday-cabinet-" + i);
                            $("#monday-cabinet-" + i).text(response["monday"]["cabinet"][i - 1]);
                            $("#monday-subject-").attr("id", "monday-subject-" + i);
                            $("#monday-subject-" + i).text(response["monday"]["subject"][i - 1]);
                        }
                        break;
                    case 2:
                        $('#table-content')
                            .append("<p id='tuesday-label'>Вівторок</p>")
                            .append("<table id='tuesday-table' class='table-bordered table-responsive-sm'></table>");
                        TableView("tuesday");
                        //fill with data
                        for (let i = response["tuesday"]["lessonId"][0];i <= response["tuesday"]["lessonId"].length;i++) {
                            $("#tuesday-table").append("<tr id='tuesday-table-item-'></tr>");
                            $("#tuesday-table-item-").attr("id", "tuesday-table-item-" + i);
                            $("#tuesday-table-item-" + i)
                                .append("<td id='tuesday-lessonId-'></td>")
                                .append("<td id='tuesday-time-'></td>")
                                .append("<td id='tuesday-cabinet-'></td>")
                                .append("<td id='tuesday-subject-'></td>");
                            $("#tuesday-lessonId-").attr("id", "tuesday-lessonId-" + i);
                            $("#tuesday-lessonId-" + i).text(i);
                            $("#tuesday-time-").attr("id", "tuesday-time-" + i);
                            $("#tuesday-time-" + i).text(response["tuesday"]["time"][i - 1]);
                            $("#tuesday-cabinet-").attr("id", "tuesday-cabinet-" + i);
                            $("#tuesday-cabinet-" + i).text(response["tuesday"]["cabinet"][i - 1]);
                            $("#tuesday-subject-").attr("id", "tuesday-subject-" + i);
                            $("#tuesday-subject-" + i).text(response["tuesday"]["subject"][i - 1]);
                        }
                        break;
                    case 3:
                        $('#table-content')
                            .append("<p id='wednesday-label'>Середа</p>")
                            .append("<table id='wednesday-table' class='table-bordered table-responsive-sm'></table>");

                        TableView("wednesday");
                        //fill with data
                        for (let i = response["wednesday"]["lessonId"][0];i <= response["wednesday"]["lessonId"].length;i++) {
                            $("#wednesday-table").append("<tr id='wednesday-table-item-'></tr>");
                            $("#wednesday-table-item-").attr("id", "wednesday-table-item-" + i);
                            $("#wednesday-table-item-" + i)
                                .append("<td id='wednesday-lessonId-'></td>")
                                .append("<td id='wednesday-time-'></td>")
                                .append("<td id='wednesday-cabinet-'></td>")
                                .append("<td id='wednesday-subject-'></td>");
                            $("#wednesday-lessonId-").attr("id", "wednesday-lessonId-" + i);
                            $("#wednesday-lessonId-" + i).text(i);
                            $("#wednesday-time-").attr("id", "wednesday-time-" + i);
                            $("#wednesday-time-" + i).text(response["wednesday"]["time"][i - 1]);
                            $("#wednesday-cabinet-").attr("id", "wednesday-cabinet-" + i);
                            $("#wednesday-cabinet-" + i).text(response["wednesday"]["cabinet"][i - 1]);
                            $("#wednesday-subject-").attr("id", "wednesday-subject-" + i);
                            $("#wednesday-subject-" + i).text(response["wednesday"]["subject"][i - 1]);
                        }
                        break;
                    case 4:
                        $('#table-content')
                            .append("<p id='thursday-label'>Четверг</p>")
                            .append("<table id='thursday-table' class='table-bordered table-responsive-sm'></table>");
                        TableView("thursday");
                        //fill with data
                        for (let i = response["thursday"]["lessonId"][0];i <= response["thursday"]["lessonId"].length;i++) {
                            $("#thursday-table").append("<tr id='thursday-table-item-'></tr>");
                            $("#thursday-table-item-").attr("id", "thursday-table-item-" + i);
                            $("#thursday-table-item-" + i)
                                .append("<td id='thursday-lessonId-'></td>")
                                .append("<td id='thursday-time-'></td>")
                                .append("<td id='thursday-cabinet-'></td>")
                                .append("<td id='thursday-subject-'></td>");
                            $("#thursday-lessonId-").attr("id", "thursday-lessonId-" + i);
                            $("#thursday-lessonId-" + i).text(i);
                            $("#thursday-time-").attr("id", "thursday-time-" + i);
                            $("#thursday-time-" + i).text(response["thursday"]["time"][i - 1]);
                            $("#thursday-cabinet-").attr("id", "thursday-cabinet-" + i);
                            $("#thursday-cabinet-" + i).text(response["thursday"]["cabinet"][i - 1]);
                            $("#thursday-subject-").attr("id", "thursday-subject-" + i);
                            $("#thursday-subject-" + i).text(response["thursday"]["subject"][i - 1]);
                        }
                        break;
                    case 5:
                        $('#table-content')
                            .append("<p id='friday-label'>П'ятниця</p>")
                            .append("<table id='friday-table' class='table-bordered table-responsive-sm'></table>");
                        TableView("friday");
                        //fill with data
                        for (let i = response["friday"]["lessonId"][0];i <= response["friday"]["lessonId"].length;i++) {
                            $("#friday-table").append("<tr id='friday-table-item-'></tr>");
                            $("#friday-table-item-").attr("id", "friday-table-item-" + i);
                            $("#friday-table-item-" + i)
                                .append("<td id='friday-lessonId-'></td>")
                                .append("<td id='friday-time-'></td>")
                                .append("<td id='friday-cabinet-'></td>")
                                .append("<td id='friday-subject-'></td>");
                            $("#friday-lessonId-").attr("id", "friday-lessonId-" + i);
                            $("#friday-lessonId-" + i).text(i);
                            $("#friday-time-").attr("id", "friday-time-" + i);
                            $("#friday-time-" + i).text(response["friday"]["time"][i - 1]);
                            $("#friday-cabinet-").attr("id", "friday-cabinet-" + i);
                            $("#friday-cabinet-" + i).text(response["friday"]["cabinet"][i - 1]);
                            $("#friday-subject-").attr("id", "friday-subject-" + i);
                            $("#friday-subject-" + i).text(response["friday"]["subject"][i - 1]);
                        }
                        break;
                }
            }
        });
}