import ExportJsonExcel from 'js-export-excel';
export const createExcel = (params) =>{
    var option={};
    option.fileName = 'MY Form';
    let dataTable = [{
      nominatingSchool: params.nominatingSchool || '',
      level: params.level || '',
      schoolYear: params.schoolYear || '',
      studentName:params.studentName || '',
      iwi:params.iwi || '',
      communityInvolvement:params.communityInvolvement || '',
      Leadership:params.Leadership || '',
      Academic:params.Academic || '',
      Sporting:params.Sporting || '',
      schoolTestimonialPerson:params.schoolTestimonialPerson || '' ,
      schoolTestimonialPosition:params.schoolTestimonialPosition || '',    
      whanauTestimonialPerson:params.whanauTestimonialPerson || '',
      whanauTestimonialRelationship:params.whanauTestimonialRelationship || '',
      mediaConsentMinor:params.mediaConsentMinor || '',
      mediaConsentPermission:params.mediaConsentPermission || '',
      mediaConsentUpdate:params.mediaConsentUpdate || '',
      mediaContentDiscretion:params.mediaContentDiscretion || '',
      providerName:params.providerName || '',
      providerEmail:params.providerEmail || '',
      providerPhone:params.providerPhone || ''
    }]; 
    option.datas=[
      {
        sheetData:dataTable,
        sheetName:'sheet',
        sheetFilter:['nominatingSchool','level','schoolYear','studentName','iwi','communityInvolvement','Leadership','Academic','Sporting','schoolTestimonialPerson','schoolTestimonialPosition','whanauTestimonialPerson','whanauTestimonialRelationship','mediaConsentMinor','mediaConsentPermission','mediaConsentUpdate','mediaContentDiscretion','providerName','providerEmail','providerPhone'],
        sheetHeader:['nominatingSchool','level','schoolYear','studentName','iwi','communityInvolvement','Leadership','Academic','Sporting','schoolTestimonialPerson','schoolTestimonialPosition','whanauTestimonialPerson','whanauTestimonialRelationship','mediaConsentMinor','mediaConsentPermission','mediaConsentUpdate','mediaContentDiscretion','providerName','providerEmail','providerPhone'],
      }
    ];
  
    var toExcel = new ExportJsonExcel(option); 
    toExcel.saveExcel(); 
}