function main() {
    let nniOrFValue = document.getElementById('nni-faculty-input').value;
    let groupValue = document.getElementById('group-input').value;
    let subgroupValue = document.getElementById('subgroup-input').value;
    let fromDateValue = document.getElementById('from-date').value;
    let toDateValue = document.getElementById('to-date').value;
    NNIOrFacultyController(nniOrFValue);
    GroupAndSubgroupController(groupValue,subgroupValue);
    DateController(fromDateValue, toDateValue);
}