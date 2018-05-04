let main = module.exports = {};
const Table = require('./controllers/TableController').TableController;
main.main = function() {
    let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    for (let i = 0;i < weekdays.length;i++) {
        let weekdayLabel = $("#" + weekdays[i] + "-label");
        if (!(weekdayLabel.length === 0)) {
            weekdayLabel.remove();
            $("#" + weekdays[i] + "-table").remove();
        }
    }
    Table.TableController();
};