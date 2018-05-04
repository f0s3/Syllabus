let NNIOrFaculty = module.exports = {};
/**
 * @return {string}
 */
NNIOrFaculty.NNIOrFacultyController = function() {
    NNIOrFaculty.NNIOrFacultyPrepared = '';
    switch ($('#nni-faculty-input').val()) {
        case 'ННІ економіки і права':NNIOrFaculty.NNIOrFacultyPrepared = 'NNIEP';break;
        case 'ННІ іноземних мов':NNIOrFaculty.NNIOrFacultyPrepared = 'NNIIM';break;
        case 'ННІ інформаційних та освітніх технологій':NNIOrFaculty.NNIOrFacultyPrepared = 'NNIIOT';break;
        case 'ННІ історії і філософії':NNIOrFaculty.NNIOrFacultyPrepared = 'NNIIF';break;
        case 'ННІ педагогічної освіти, соціальної роботи і мистецтва':NNIOrFaculty.NNIOrFacultyPrepared = 'NNIPOSRM';break;
        case 'ННІ природничих наук':NNIOrFaculty.NNIOrFacultyPrepared = 'NNIPN';break;
        case 'ННІ української філології та соціальних комунікацій':NNIOrFaculty.NNIOrFacultyPrepared = 'NNIUFSK';break;
        case 'ННІ фізичної культури, спорту і здоров’я':NNIOrFaculty.NNIOrFacultyPrepared = 'NNIFKSZ';break;
        case 'Психологічний факультет':NNIOrFaculty.NNIOrFacultyPrepared = 'FP';break;
        case 'Факультет обчислювальної техніки, інтелектуальних та управляючих систем':NNIOrFaculty.NNIOrFacultyPrepared = 'FOTIUS';break;
        case 'Навчально-науковий центр «Інститут міжнародної освіти»':NNIOrFaculty.NNIOrFacultyPrepared = 'NNCIMO';break;
        case 'Інститут доуніверситетської підготовки і післядипломної освіти':NNIOrFaculty.NNIOrFacultyPrepared = 'IDPPO';break;
        default: console.error('Chosen NNI or faculty does not exist.');
    }
  return 'Syllabus_' + NNIOrFacultyPrepared;
};