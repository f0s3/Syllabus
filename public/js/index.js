function main() {
    $("#submit-btn").prop("disabled","true");
    let fromDateValue = document.getElementById('from-date').value;
    let toDateValue = document.getElementById('to-date').value;
    NNIOrFacultyController();
    GroupAndSubgroupController();
    DateController(fromDateValue, toDateValue);
}