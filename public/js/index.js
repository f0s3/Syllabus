let groupAndSubgroup = require('../js/controllers/GroupAndSubgroupController');
function main() {
    let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    for (let i = 0;i < weekdays.length;i++) {
        if (!($("#" + weekdays[i] + "-label").length === 0)) {
            $("#" + weekdays[i] + "-label").remove();
            $("#" + weekdays[i] + "-table").remove();
        }
    }
    let fromDateValue = $('#from-date').val();
    let toDateValue = $('#to-date').val();
    NNIOrFacultyController();
    DateController(fromDateValue, toDateValue);
    groupAndSubgroup.GroupAndSubgroupController();
}