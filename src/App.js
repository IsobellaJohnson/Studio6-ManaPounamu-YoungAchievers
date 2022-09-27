import * as api from './api'
import './App.css';
import {login,save1,save2,save3,save4,save5,save6} from './req/api.js';

import { useEffect,useState,useCallback } from "react";

import { createExcel } from "./excel.js";
import { exportPDF } from "./pdf.js";
function App() {
  const fetchApi = useCallback(async () => {
    const body = {
      "email": "525907600@qq.com",
      "password":"Gaoyuan123"
    }
    const res = await login(body);
    const {token} = res.data.data;
    localStorage.setItem('token',token)
    
  })
    
  const [form1, setForm1] = useState({
    nominatingSchool:"",
    address: "",
    homePhone: "",
    iwi: "",
    studentName: "",
    schoolYear: null,
    studentImage: null,
  });
// Student Information   nominatingSchool level schoolYear studentName  iwi
  const [nominatingSchool, setnominatingSchool] = useState('');
  const [address, setaddress] = useState('');
  const [level , setlevel] = useState('');
  const [iwi, setiwi] = useState('');
  const [studentName, setstudentName] = useState('');
  const [schoolYear, setschoolYear] = useState('');
  const [studentImage, setstudentImage] = useState('');
  const chang1 = (e)=>{  
    setnominatingSchool(e.target.value);
  }
  const chang2 = (e)=>{  
    setaddress(e.target.value);
  }
  const chang3 = (e)=>{  
    console.log(6,e.target.value)
    setlevel(e.target.value);
  }
  const chang4 = (e)=>{  
    setiwi(e.target.value);
  }
  const chang5 = (e)=>{  
    setstudentName(e.target.value);
  }
  const chang6 = (e)=>{  

    setschoolYear(e.target.value);
  }
  const chang7 = (e)=>{  
    setstudentImage(e.target.value);
  }

  // Student Achievements  communityInvolvement Leadership Academic Sporting
  const [communityInvolvement, setcommunityInvolvement] = useState('');
  const [Leadership, setLeadership] = useState('');
  const [Academic , setAcademic] = useState('');
  const [Sporting, setSporting] = useState('');

  const changa1 = (e)=>{  
    setcommunityInvolvement(e.target.value);
  }
  const changa2 = (e)=>{  
    setLeadership(e.target.value);
  }
  const changa3 = (e)=>{  
    setAcademic(e.target.value);
  }
  const changa4 = (e)=>{  
    setSporting(e.target.value);
  }

  // Mana Pounamu Young Achiever Recipient Testimonial
// schoolTestimonial: []
// schoolTestimonialPerson: "test2"
// schoolTestimonialPosition: "test2"


const [schoolTestimonial, setschoolTestimonial] = useState('');
const [schoolTestimonialPerson, setschoolTestimonialPerson] = useState('');
const [schoolTestimonialPosition , setschoolTestimonialPosition] = useState('');

const changb1 = (e)=>{  
  setschoolTestimonial(e.target.value);
}

const  changb2 = (e)=>{  
  setschoolTestimonialPerson(e.target.value);
}

const  changb3 = (e)=>{  
  setschoolTestimonialPosition(e.target.value);
}

// Mana Pounamu Young Achiever Recipient Whānau Endorsement
// whanauTestimonialPerson: "test1"
// whanauTestimonialRelationship: "test1"

const [whanauTestimonial, setwhanauTestimonial] = useState('');
const [whanauTestimonialPerson, setwhanauTestimonialPerson] = useState('');
const [whanauTestimonialRelationship , setwhanauTestimonialRelationship] = useState('');

const  changc1 = (e)=>{  
  setwhanauTestimonial(e.target.value);
}

const  changc2 = (e)=>{  
  setwhanauTestimonialPerson(e.target.value);
}
const  changc3 = (e)=>{  
  setwhanauTestimonialRelationship(e.target.value);
}

//Mana Pounamu Media Consent
// mediaConsentMinor: true
// mediaConsentPermission: true
// mediaConsentUpdate: true
// mediaContentDiscretion: true


const [mediaConsentMinor, setmediaConsentMinor] = useState(false);
const [mediaConsentPermission, setmediaConsentPermission] = useState(false);
const [mediaConsentUpdate , setmediaConsentUpdate] = useState(false);
const [mediaContentDiscretion , setmediaContentDiscretion] = useState(false);

const  changd1 = (e)=>{  
  setmediaConsentMinor(e.target.checked);
}
const  changd2 = (e)=>{  
  setmediaConsentPermission(e.target.checked);
}
const  changd3 = (e)=>{  
  setmediaConsentUpdate(e.target.checked);
}
const  changd4 = (e)=>{  
  setmediaContentDiscretion(e.target.checked);
}

//Providers Details
// providerEmail: "test1"
// providerName: "test1"
// providerPhone: "test1"

const [providerName, setproviderName] = useState('');
const [providerEmail, setproviderEmail] = useState('');
const [providerPhone , setproviderPhone] = useState('');

const  changee1 = (e)=>{  
  setproviderName(e.target.value);
}
const  changee2 = (e)=>{  
  setproviderEmail(e.target.value);
}
const  changee3 = (e)=>{  
  setproviderPhone(e.target.value);
}

  const fetchApi1 = useCallback(async () => {
    const p1 ={
      nominatingSchool:nominatingSchool,
      level:level,
      schoolYear:parseInt(schoolYear),
      studentName:studentName,
      // iwi:iwi
    }
    const res1 = await save1(p1);
   
    const p2 = {
      communityInvolvement:communityInvolvement,
      Leadership:Leadership,
      Academic:Academic,
      Sporting:Sporting
    }
    const res2 = await save2(p2);

    const p3 = {
      schoolTestimonialPerson:schoolTestimonialPerson,
      schoolTestimonialPosition:schoolTestimonialPosition
    }
    const res3 = await save3(p3);

    const p4 = {
      whanauTestimonialPerson:whanauTestimonialPerson,
      whanauTestimonialRelationship:whanauTestimonialRelationship
    }
    const res4 = await save4(p4);      

    const p5 = {
      mediaConsentMinor:mediaConsentMinor,
      mediaConsentPermission:mediaConsentPermission,
      mediaConsentUpdate:mediaConsentUpdate,
      mediaContentDiscretion:mediaContentDiscretion

    }
    const res5 = await save5(p5);
  
    const p6 = {
      providerEmail:providerEmail,
      providerName:providerName,
      providerPhone:providerPhone
    }
    const res6 = await save6(p6);
    const params = {
      nominatingSchool: nominatingSchool,
      level: level,
      schoolYear: schoolYear,
      studentName:studentName,
      iwi:iwi,
      communityInvolvement:communityInvolvement,
      Leadership:Leadership,
      Academic:Academic,
      Sporting:Sporting,
      schoolTestimonialPerson:schoolTestimonialPerson,
      schoolTestimonialPosition:schoolTestimonialPosition,    
      whanauTestimonialPerson:whanauTestimonialPerson,
      whanauTestimonialRelationship:whanauTestimonialRelationship,
      mediaConsentMinor:mediaConsentMinor,
      mediaConsentPermission:mediaConsentPermission,
      mediaConsentUpdate:mediaConsentUpdate,
      mediaContentDiscretion:mediaContentDiscretion,
      providerName:providerName,
      providerEmail:providerEmail,
      providerPhone:providerPhone
    }
    createExcel(params);
    exportPDF('MY FORM','pdfTable')
    
  })
  useEffect ( () => {
    const token = localStorage.getItem("token");
    if(!token){fetchApi();}
    
},[])



  return (
  <div className="App">
    <div className="container">
      <form>
      <div className="si-title">Student Information</div>
      <div className="row">
    <div className="col">
      <label htmlFor="nominatingSchool" className="form-label">Nominating School *</label>
      <input type="text" className="form-control" onChange = {chang1}></input>
    </div>
      <div className="col">
      <label htmlFor="level" className="form-label">Level *</label>
    <select class="form-select" aria-label="Default select example" onChange = {chang3}>
      <option selected>-- Select a level --</option>
      <option value="Teina/Junior">Teina/Junior</option>
      <option value="Tuakana/Senior">Tuakana/Senior</option>
    </select>
    </div>
    <div className="col">
    <label htmlFor="year" className="form-label">Year *</label>
    <select class="form-select" aria-label="Default select example"  onChange = {chang6}>
      <option selected>-- Select a year --</option>
      <option value="9">Year 9</option>
      <option value="10">Year 10</option>
      <option value="11">Year 11</option>
      <option value="12">Year 12</option>
      <option value="13">Year 13</option>
    </select>
    </div>
    </div>
    <div className="row">
  <div className="col">
    <label htmlFor="exampleInputPassword1" className="form-label">Student Name *</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange = {chang5}></input>
  </div>
  <div className="col">
    <label htmlFor="exampleInputPassword1" className="form-label">Iwi *</label>
    <select class="form-select" aria-label="Default select example"  onChange = {chang4}>
      <option selected>-- Select a Iwi --</option>
      <option value="Te Aupōuri\t">Te Aupōuri</option>
      <option value="Ngāti Kurī\t">Ngāti Kurī</option>
    </select>
  </div>
  </div>
  <div className="row">
    <div className="col-md-4">
    <label htmlFor="exampleInputPassword1" className="form-label">Student Photo *</label>
    <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01"></input>
  <div className="si-body file-u"><em>Accepted file types: png, jpg, jpeg, docx, xlsx, pdf</em></div>
  </div>
  </div>
  </div>

  <div className="si-title">Student Achievements</div>
  <div className="si-body"><em>Please list the student’s achievements under one or several of the following headings:</em></div>
  <div class="mb-3">
  <label for="cultural-a" class="form-label">Whakauru i te iwi whānui / Community or cultural involvement *</label>
  <textarea onChange = {changa1} class="form-control" id="cultural-a" rows="6" placeholder='For example:&#x0a;* Aroha ki kā takata - show manaaki to people at school, wider community&#x0a;* Kapa Haka member/Kaea&#x0a;* Participation in numerous whānau/community hui&#x0a;* Member of the Orchestra&#x0a;* Choir member'></textarea>
  </div>
  <div class="mb-3">
  <label for="leadership-a" class="form-label">Te ārahina / Leadership *</label>
  <textarea onChange = {changa2} class="form-control" id="leadership-a" rows="7" placeholder='For example:&#x0a;* Attendance at Hui Taihoi&#x0a;* Head boy/Girl&#x0a;* Prefect&#x0a;* Peer Support&#x0a;* Tū Mai Rakatahi&#x0a;* Ngā Manu Kо̄rero Representative'></textarea>
  </div>
  <div class="mb-3">
  <label for="academic-a" class="form-label">Mātauraka / Academic *</label>
  <textarea onChange = {changa3}  class="form-control" id="academic-a" rows="7" placeholder='For example:&#x0a;* Australasian English Competitions&#x0a;* Hands-on at Otago&#x0a;* Please list subject/cirriculum strengths'></textarea>
  </div>
  <div class="mb-3">
  <label for="sporting-a" class="form-label">Hākinakina / Sporting *</label>
  <textarea onChange = {changa4}  class="form-control" id="sporting-a" rows="6" placeholder='For example:&#x0a;* Representative&#x0a;* Captain&#x0a;* Sporting Blues&#x0a;* Participation&#x0a;* Coaching'></textarea>
  </div>
  <div class="mb-3">
  <label for="other-a" class="form-label">He kōrero tautoko anō / Other supporting information not previously covered</label>
  <textarea class="form-control" id="other-a" rows="3" placeholder='For example:&#x0a;* Please tell us about your future plans'></textarea>
  </div>

  <div className="si-title">Mana Pounamu Young Achiever Recipient Testimonial</div>
  <div className="si-body"><em>To be completed by the school principal or their nominee.</em></div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Nominee Testimonial*</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
  <div className="row">
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Nominee*</label>
      <input onChange = {changb2} type="text" className="form-control"></input>
    </div>
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Nominee Position*</label>
      <input onChange = {changb3} type="text" className="form-control"></input>
    </div>
    </div>

    <div className="si-title">Mana Pounamu Young Achiever Recipient Whānau Endorsement</div>
    <div className="si-body"><em>To be completed by a whānau member. Please tell us how wonderful your rakatahi is (include any information not previously covered).</em></div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Whanau Endorsement *</label>
  <textarea onChange = {changc1} class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
  <div className="row">
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Endorser Name *</label>
      <input  onChange = {changc2} type="text" className="form-control"></input>
    </div>
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Endorser Relationship *</label>
      <input  onChange = {changc3} type="text" className="form-control"></input>
    </div>
    </div>

    <div className="si-title">Mana Pounamu Media Consent</div>
    <div className="si-body"><em>Thank you for agreeing to participate in future promotions of Mana Pounamu. We would appreciate you completing this form as an indication that you understand the purposes for which your image/statements/artwork/name, and/or profile will be used.</em></div>
    <div class="form-check">
  <input class="form-check-input" onChange = {changd1} type="checkbox" value="" id="flexCheckDefault"></input>
  <label class="form-check-label" for="flexCheckDefault">
  I give permission for Mana Pounamu to use my photo, artwork, name, and/or profile for promotional purposes, in a promotional video/CDRom, fliers, the world wide web and in any other media items aimed at promoting Mana Pounamu, for a period of five years, unless otherwise stated. *
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" onChange = {changd2} type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
  Mana Pounamu will always use discretion when using video footage, my photo, artwork and/or profile and will not use it to discredit me in any way. *
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" onChange = {changd3} type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
  I understand that I have the right to update or delete my file at any time. Once this request is made, it will be applicable to all future productions – all existing \ promotions will be continued to be used. *
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" onChange = {changd4} type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
  I understand participants who are under 18 years of age have consent by their parent or guardian in accepting the above release. *
  </label>
</div>

<div className="si-title">Providers Details</div>
<div className="row">
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Provider Name *</label>
      <input onChange = {changee1} type="text" className="form-control"></input>
    </div>
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Provider Email *</label>
      <input onChange = {changee2} type="text" className="form-control"></input>
    </div>
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Provider Phone</label>
      <input onChange = {changee3} type="text" className="form-control"></input>
    </div>
    </div>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked" >
  I understand participants who are under 18 years of age have consent by their parent or guardian in accepting the above release. *
  </label>
</div>

  <button type="button" className="btn btn-primary sub-btn" onClick={fetchApi1} >Submit</button>
  </form>
    </div>
    <div id ="pdfTable">
<table border="1" >
    <tr>
    <th>nominatingSchool</th>
    <th>level</th>
    <th>schoolYear</th>
    <th>studentName</th>
    <th>iwi</th>
    <th>communityInvolvement</th>
    <th>Leadership</th>
    <th>Academic</th>
    <th>Sporting</th>
    <th>schoolTestimonialPerson</th>
  </tr>
  <tr>
    <td>{nominatingSchool}</td>
    <td>{level}</td>
    <td>{schoolYear}</td>
    <td>{studentName}</td>
    <td>{iwi}</td>
    <td>{communityInvolvement}</td>
    <td>{Leadership}</td>
    <td>{Academic}</td>
    <td>{Sporting}</td>
    <td>{schoolTestimonialPerson}</td>
  </tr>
</table>
<div style = {{height:"40px"}}></div>
<table border="1" >
  <tr><th>schoolTestimonialPosition</th><th>whanauTestimonialPerson</th><th>whanauTestimonialRelationship</th><th>mediaConsentMinor</th><th>mediaConsentPermission</th>
  </tr>
  <tr>
    <td>{schoolTestimonialPosition}</td>
    <td>{whanauTestimonialPerson}</td>
    <td>{whanauTestimonialRelationship}</td>
    <td>{mediaConsentMinor +''}</td>
    <td>{mediaConsentPermission +''}</td>
  </tr>
</table>
<div style = {{height:"40px"}}></div>
<table border="1" >
    <tr>
    <th>mediaConsentUpdate</th><th>mediaContentDiscretion</th><th>providerName</th><th>providerEmail</th><th>providerPhone</th>
  </tr>
  <tr>
    <td>{mediaConsentUpdate +''}</td>
    <td>{mediaContentDiscretion +''}</td>
    <td>{providerName}</td>
    <td>{providerEmail}</td>
    <td>{providerPhone}</td>
  </tr>
</table>
<div style = {{height:"40px"}}></div>
  </div>
  </div>
  );
}

export default App;
