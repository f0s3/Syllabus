function main() {
    let fromDateValue = document.getElementById('from-date').value;
    let toDateValue = document.getElementById('to-date').value;
    NNIOrFacultyController();
    GroupAndSubgroupController();
    DateController(fromDateValue, toDateValue);
}