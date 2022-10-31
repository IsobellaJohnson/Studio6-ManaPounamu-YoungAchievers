import axios from "axios";
const baseUrl = "http://localhost:1337";
export const login = (data) =>{
    return new Promise((r1,r2)=>{
        axios.post(`${baseUrl}/admin/login`, data)
        .then(res => {
            r1(res);
        })
    })
}
const token  = localStorage.getItem("token");

// Student Information
// address: "测试"
// homePhone: "15013960076"
// iwi: "Te Aupōuri\t"
// mobile: "15013960076"
// schoolYear: 9
// studentImage: null
export const save1 = (data) =>{
    return new Promise((r1,r2)=>{
        axios.post(`${baseUrl}/content-manager/collection-types/api::student-information.student-information`, data,
        {
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log(6,res);
        }).catch(err =>{
            console.log(6,err)
        })
    })
}

// Student Achievements
// Academic: "测试1"
// Leadership: "测试1"
// Sporting: "测试1"
// communityInvolvement: "测试1"
export const save2 = (data) =>{
    return new Promise((r1,r2)=>{
        axios.post(`${baseUrl}/content-manager/collection-types/api::student-achievement.student-achievement`,data, {
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log(6,res);
        }).catch(err =>{
            console.log(6,err)
        })
    })
}

// Mana Pounamu Young Achiever Recipient Testimonial
// schoolTestimonial: []
// schoolTestimonialPerson: "测试2"
// schoolTestimonialPosition: "测试2"
export const save3 = (data) =>{
    return new Promise((r1,r2)=>{
        axios.post(`${baseUrl}/content-manager/collection-types/api::school-testimonial-information.school-testimonial-information`,data, {
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log(6,res);
        }).catch(err =>{
            console.log(6,err)
        })
    })
}


// Mana Pounamu Young Achiever Recipient Whānau Endorsement
// whanauTestimonialPerson: "测试1"
// whanauTestimonialRelationship: "测试1"

export const save4 = (data) =>{
    return new Promise((r1,r2)=>{
        axios.post(`${baseUrl}/content-manager/collection-types/api::whanau-testimonial-information.whanau-testimonial-information`,data, {
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log(6,res);
        }).catch(err =>{
            console.log(6,err)
        })
    })
}

//Mana Pounamu Media Consent
// mediaConsentMinor: true
// mediaConsentPermission: true
// mediaConsentUpdate: true
// mediaContentDiscretion: true
export const save5 = (data) =>{
    return new Promise((r1,r2)=>{
        axios.post(`${baseUrl}/content-manager/collection-types/api::media-consent.media-consent`, data,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log(6,res);
        }).catch(err =>{
            console.log(6,err)
        })
    })
}

//Providers Details
// providerEmail: "测试1"
// providerName: "测试1"
// providerPhone: "测试1"
export const save6 = (data) =>{
    return new Promise((r1,r2)=>{
        axios.post(`${baseUrl}/content-manager/collection-types/api::provider-detail.provider-detail`,data, {
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log(6,res);
        }).catch(err =>{
            console.log(6,err)
        })
    })
}
export const save7 = (data) =>{
    return new Promise((r1,r2)=>{
        axios.get(`${baseUrl}/content-manager/collection-types/api::student-form.student-form?page=${data.page}&pageSize=${data.pageSize}&sort=${data.sort}`,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log(6,res);
        }).catch(err =>{
            console.log(6,err)
        })
    })
}
export const save8 = (id) =>{
    return new Promise((r1,r2)=>{
        axios.delete(`${baseUrl}/content-manager/collection-types/api::student-form.student-form/${id}`,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log('delete',res);
        }).catch(err =>{
            console.log('delete',err)
        })
    })
}
export const save9 = (data) =>{
    return new Promise((r1,r2)=>{
        axios.post(`${baseUrl}/content-manager/collection-types/api::student-form.student-form`,data,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:'Bearer ' + token
            }
        })
        .then(res => {
            r1(res);
            console.log('save',res);
        }).catch(err =>{
            console.log('save',err)
        })
    })
}