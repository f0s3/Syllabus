/*processes and prepares nni or faculty.*/
/**
 * @return {string}
 */
function NNIOrFacultyController(nniOrFValue) {
    let NNIOrFacultyPrepared = '';
    switch (nniOrFValue) {
        case 'ННІ економіки і права':NNIOrFacultyPrepared = 'NNIEP';break;
        case 'ННІ іноземних мов':NNIOrFacultyPrepared = 'NNIIM';break;
        case 'ННІ інформаційних та освітніх технологій':NNIOrFacultyPrepared = 'NNIIOT';break;
        case 'ННІ історії і філософії':NNIOrFacultyPrepared = 'NNIIF';break;
        case 'ННІ педагогічної освіти, соціальної роботи і мистецтва':NNIOrFacultyPrepared = 'NNIPOSRM';break;
        case 'ННІ природничих наук':NNIOrFacultyPrepared = 'NNIPN';break;
        case 'ННІ української філології та соціальних комунікацій':NNIOrFacultyPrepared = 'NNIUFSK';break;
        case 'ННІ фізичної культури, спорту і здоров’я':NNIOrFacultyPrepared = 'NNIFKSZ';break;
        case 'Психологічний факультет':NNIOrFacultyPrepared = 'FP';break;
        case 'Факультет обчислювальної техніки, інтелектуальних та управляючих систем':NNIOrFacultyPrepared = 'FOTIUS';break;
        case 'Навчально-науковий центр «Інститут міжнародної освіти»':NNIOrFacultyPrepared = 'NNCIMO';break;
        case 'Інститут доуніверситетської підготовки і післядипломної освіти':NNIOrFacultyPrepared = 'IDPPO';break;
        default: console.error('Chosen NNI or faculty does not exist.');
    }
    return NNIOrFacultyPrepared;
}