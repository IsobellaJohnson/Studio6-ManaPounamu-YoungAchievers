import * as api from './api'
import './App.css';

function App() {
  return (
  <div className="App">
    <div className="container">
      <form>
      <div className="si-title">Student Information</div>
      <div className="row">
    <div className="col">
      <label htmlFor="nominatingSchool" className="form-label">Nominating School *</label>
      <input type="text" className="form-control"></input>
    </div>
      <div className="col">
      <label htmlFor="level" className="form-label">Level *</label>
    <select class="form-select" aria-label="Default select example">
      <option selected>-- Select a level --</option>
      <option value="1">Teina/Junior</option>
      <option value="2">Tuakana/Senior</option>
    </select>
    </div>
    <div className="col">
    <label htmlFor="year" className="form-label">Year *</label>
    <select class="form-select" aria-label="Default select example">
      <option selected>-- Select a year --</option>
      <option value="1">Year 9</option>
      <option value="2">Year 10</option>
      <option value="1">Year 11</option>
      <option value="2">Year 12</option>
      <option value="1">Year 13</option>
    </select>
    </div>
    </div>
    <div className="row">
  <div className="col">
    <label htmlFor="exampleInputPassword1" className="form-label">Student Name *</label>
    <input type="text" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="col">
    <label htmlFor="exampleInputPassword1" className="form-label">Iwi *</label>
    <input type="text" className="form-control" id="exampleInputPassword1"></input>
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
  <label for="exampleFormControlTextarea1" class="form-label">Whakauru i te iwi whānui / Community or cultural involvement *</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='For example:&#x0a;* Aroha ki kā takata - show manaaki to people at school, wider community&#x0a;* Kapa Haka member/Kaea&#x0a;* Participation in numerous whānau/community hui&#x0a;* Member of the Orchestra&#x0a;* Choir member'></textarea>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Te ārahina / Leadership *</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder='For example:&#x0a;* Attendance at Hui Taihoi&#x0a;* Head boy/Girl&#x0a;* Prefect&#x0a;* Peer Support&#x0a;* Tū Mai Rakatahi&#x0a;* Ngā Manu Kо̄rero Representative'></textarea>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Mātauraka / Academic *</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder='For example:&#x0a;* Australasian English Competitions&#x0a;* Hands-on at Otago&#x0a;* Please list subject/cirriculum strengths'></textarea>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Hākinakina / Sporting *</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='For example:&#x0a;* Representative&#x0a;* Captain&#x0a;* Sporting Blues&#x0a;* Participation&#x0a;* Coaching'></textarea>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">He kōrero tautoko anō / Other supporting information not previously covered</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='For example:&#x0a;* Please tell us about your future plans'></textarea>
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
      <input type="text" className="form-control"></input>
    </div>
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Nominee Position*</label>
      <input type="text" className="form-control"></input>
    </div>
    </div>

    <div className="si-title">Mana Pounamu Young Achiever Recipient Whānau Endorsement</div>
    <div className="si-body"><em>To be completed by a whānau member. Please tell us how wonderful your rakatahi is (include any information not previously covered).</em></div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Whanau Endorsement *</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
  <div className="row">
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Endorser Name *</label>
      <input type="text" className="form-control"></input>
    </div>
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Endorser Relationship *</label>
      <input type="text" className="form-control"></input>
    </div>
    </div>

    <div className="si-title">Mana Pounamu Media Consent</div>
    <div className="si-body"><em>Thank you for agreeing to participate in future promotions of Mana Pounamu. We would appreciate you completing this form as an indication that you understand the purposes for which your image/statements/artwork/name, and/or profile will be used.</em></div>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label class="form-check-label" for="flexCheckDefault">
  I give permission for Mana Pounamu to use my photo, artwork, name, and/or profile for promotional purposes, in a promotional video/CDRom, fliers, the world wide web and in any other media items aimed at promoting Mana Pounamu, for a period of five years, unless otherwise stated. *
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
  Mana Pounamu will always use discretion when using video footage, my photo, artwork and/or profile and will not use it to discredit me in any way. *
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
  I understand that I have the right to update or delete my file at any time. Once this request is made, it will be applicable to all future productions – all existing \ promotions will be continued to be used. *
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
  I understand participants who are under 18 years of age have consent by their parent or guardian in accepting the above release. *
  </label>
</div>

<div className="si-title">Providers Details</div>
<div className="row">
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Provider Name *</label>
      <input type="text" className="form-control"></input>
    </div>
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Provider Email *</label>
      <input type="text" className="form-control"></input>
    </div>
    <div className="col">
      <label htmlFor="Nominee" className="form-label">Provider Phone</label>
      <input type="text" className="form-control"></input>
    </div>
    </div>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
  I understand participants who are under 18 years of age have consent by their parent or guardian in accepting the above release. *
  </label>
</div>

  <button type="submit" className="btn btn-primary sub-btn">Submit</button>
  </form>
    </div>
  </div>
  );
}

export default App;
