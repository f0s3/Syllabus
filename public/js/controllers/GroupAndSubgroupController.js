/*processes, validates and prepares group and subgroup*/
/**
 * @return {string}
 */
function GroupAndSubgroupController() {
    let domain = window.location.hostname;
    let baseURL = "http://" + domain + ":4444/js/models/" + NNIOrFacultyController() + "/";
    if ($('#subgroup-input').val() === "") return baseURL + $('#group-input').val() + ".json"; //todo: fix this condition
    else return baseURL + $('#group-input').val() + "/" + $('#subgroup-input').val() + ".json";
}
//todo: add logic for adding subgroup input if subgroup is divided
//todo: this function is called twice(how?)