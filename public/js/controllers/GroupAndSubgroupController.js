/*processes, validates and prepares group and subgroup*/
/**
 * @return {string}
 */
function GroupAndSubgroupController() {
    let domain = window.location.hostname;
    let baseURL = "http://" + domain + ":4444/js/models/" + NNIOrFacultyController() + "/";
    let groupIsNotDivided = baseURL + $('#group-input').val() + ".json";
    let groupIsDivided = baseURL + $('#group-input').val() + "/" + $('#subgroup-input').val() + ".json";
    return groupIsNotDivided;//todo: check if group is divided and return correspondent path
}
//todo: add logic for adding subgroup input if subgroup is divided