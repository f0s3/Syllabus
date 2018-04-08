/*processes, validates and prepares group and subgroup*/
/**
 * @return {string}
 */
function GroupAndSubgroupController() {
    return "http://localhost:4444/js/models/" +
        NNIOrFacultyController() + "/" +
        document.getElementById('group-input').value + "/" +
        document.getElementById('subgroup-input').value + ".json";
}


