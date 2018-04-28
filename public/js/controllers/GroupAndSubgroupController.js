let groupAndSubgroup = exports = {};
let server = require('../src/server');
/**
 * @return {string}
 */
groupAndSubgroup.GroupAndSubgroupController = function () {
    //let domain = window.location.hostname;
    let selectedDB = 'Syllabus_' + NNIOrFacultyController();
    /* thoughts...
    * what cases may occur:
    * 1) user entered both group and subgroup
    * 2) user entered none of fields
    * 3) user entered only group
    * 4) user entered only subgroup
    * 5) user entered both fields but subgroup is entered incorrectly
    * 6) user entered group and its incorrect
    * 7) user entered both fields but group is incorrect
    * */
    let group = $('#group-input').val();
    let subgroup = $('#subgroup-input').val();
    //todo:check if group exists
    console.log(server.groupExists(selectedDB, subgroup));
    //let groupFromDB = server.getGroupInfoFromDB(selectedDB, group);
};