/*processes, validates and prepares group and subgroup*/
/**
 * @return {string}
 */
function GroupAndSubgroupController() {
    let domain = window.location.hostname;
    return "http://" + domain + ":4444/js/models/" +
        NNIOrFacultyController() + "/" +
        document.getElementById('group-input').value + "/" +
        document.getElementById('subgroup-input').value + ".json";
}


