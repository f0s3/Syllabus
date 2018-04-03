/*processes, validates and prepares group and subgroup*/
function GroupAndSubgroupController(groupValue,subgroupValue) {
    //even though this doesn't work i will pretend that everything is ok
    //todo:logic + transform pseudocode to js
    let folderExists = false;
    let folderName = GroupAndSubgroupController(); //the idea is to get what it returns
    if (folderName == "real models/folder(faculty or nni) name") folderExists = true;//dunno how to do this...
    if (folderExists) {
        // search for groups inside the folder
        if (groupValue == "folder inside models/selectednni/ with such name") {
            //yes, this group exists
            if (subgroupValue == "check if json with name of subgroup exists") {
                //yes!
            }
        }
    }
    console.log(folderName);
    console.log(groupValue + '  ' + subgroupValue);
}


