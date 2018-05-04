let groupOrSubgroup = module.exports = {};
const NNIOrFacultyController = require("./NNIOrFacultyController").NNIOrFacultyController;
const DBRouter = require("../models/DBRouter").tableExists();

groupOrSubgroup.GroupOrSubgroupController = function () {
    let db = NNIOrFacultyController();
    let groupOrSubgroupName;
    let userGroupInput = $('#group-input').val();
    let userSubgroupInput = $('#subgroup-input').val();
    if (userSubgroupInput !== '') {
        groupOrSubgroupName = userSubgroupInput;
    } else if (userSubgroupInput === '' && userGroupInput !== '') {
        groupOrSubgroupName = userGroupInput;
    }
    if (DBRouter.tableExists(db, groupOrSubgroupName).toString() === '1') {
        return groupOrSubgroupName;
    }
};