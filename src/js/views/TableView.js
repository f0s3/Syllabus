function TableView(weekDay) {
    $("#" + weekDay + "-table")
        .append("<thead id='table-head-'></thead>")
        .append("<tbody id='table-body-'></tbody>");
    $("#table-head-").attr("id", "table-head-" + weekDay);
    $("#table-body-").attr("id", "table-body-" + weekDay);
    $("#table-head-" + weekDay).append("<tr id='table-headers-'></tr>");
    $("#table-headers-").attr("id", "table-headers-" + weekDay);

    $("#table-headers-" + weekDay)
        .append("<th class='lessonId-header' width='1%'>№</th>")
        .append("<th class='time-header' width='11%'>Час</th>")
        .append("<th class='cabinet-header'>Кабінет</th>")
        .append("<th class='subject-header' width='80%'>Предмет</th>");
}