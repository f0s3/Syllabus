/*processes, validates and prepares group and subgroup*/
function GroupAndSubgroupController(groupValue,subgroupValue) {
    let nniOrFacultyFolder = NNIOrFacultyController();
    fetch('http://localhost:4444/js/models/' + nniOrFacultyFolder + '/' + groupValue + '/' + subgroupValue + '.json')
        .then(promise => promise.json())
        .then(function(response) {
            document.getElementById("table-item-data").innerText = "test123123";

            document.getElementById("num-header").innerText = "№";
            document.getElementById("time-header").innerText = "Час";
            document.getElementById("cabinet-header").innerText = "Кабінет";
            document.getElementById("subject-header").innerText = "Предмет";


            //document.getElementById("table-content").innerHTML = JSON.stringify(response);
        });
}


