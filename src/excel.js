import ExportJsonExcel from 'js-export-excel';
export const createExcel = (params) =>{
    var option={};
    option.fileName = 'MY Form';
    let dataTable = [{
      nominatingSchool:params.nominatingSchool || '',
            level:params.level || '',
            year:params.year || '',
            studentName:params.studentName || '',
            iwi:params.iwi || '',
            studentImage:params.studentImage?params.studentImage.url || '' :'',
            community:params.community || '',
            leadership:params.leadership || '', 
            academic:params.academic || '', 
            sporting:params.sporting || '', 
            otherInformation:params.otherInformation || '', 
            nomineeTestimonia:params.nomineeTestimonia || '', 
            nominee:params.nominee || '', 
            nomineePosition:params.nomineePosition || '', 
            whanauEndorsement:params.whanauEndorsement || '', 
            endorserName:params.endorserName || '', 
            endorserRelationship:params.endorserRelationship || '', 
            mediaConsentPermissionm:params.mediaConsentPermissionm +''|| '',
            mediaContentDiscretion:params.mediaContentDiscretion +'' || '', 
            mediaConsentUpdate:params.mediaConsentUpdate +'' || '',
            mediaConsentMinor:params.mediaConsentMinor +'' || '', 
            providerName:params.providerName || '', 
            providerPhone:params.providerPhone || '',
            providerEmail:params.providerEmail || '',
            understand:params.understand +'' || ''
    }]; 
    option.datas=[
      {
        sheetData:dataTable,
        sheetName:'sheet',
        sheetFilter:['nominatingSchool', 'level', 'year', 'studentName', 'iwi', 'studentImage', 'community', 'leadership', 'academic', 'sporting', 'otherInformation', 'nomineeTestimonia', 'nominee', 'nomineePosition', 'whanauEndorsement', 'endorserName', 'endorserRelationship', 'mediaConsentPermissionm','mediaContentDiscretion', 'mediaConsentUpdate','mediaConsentMinor', 'providerName', 'providerPhone','providerEmail','understand'],
        sheetHeader:['nominatingSchool', 'level', 'year', 'studentName', 'iwi', 'studentImage', 'community', 'leadership', 'academic', 'sporting', 'otherInformation', 'nomineeTestimonia', 'nominee', 'nomineePosition', 'whanauEndorsement', 'endorserName', 'endorserRelationship', 'mediaConsentPermissionm','mediaContentDiscretion', 'mediaConsentUpdate','mediaConsentMinor', 'providerName', 'providerPhone','providerEmail','understand'],
      }
    ];
  
    var toExcel = new ExportJsonExcel(option); 
    toExcel.saveExcel(); 
}