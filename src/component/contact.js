

import Footer from './footer';
import Item2 from './item2';
function Contact() {
    return (
    <div className="App">
      <div className="container-sm contact-title">
        <h1 class="contact">Contact</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
          <div id="contact1">
          <h2 class="contact-name">Angelina Kiore</h2>
          <h2 class="contact-role">Senior Advisor: Parents, Family & Whānau</h2>
          <a class="email"> 	&#9993; angelina.kiore@minedu.govt.nz</a><br/>
          <a class="email"> &#x1F4DE; 03 471 5230</a>
        </div>
        <div id="contact2">
          <h2 class="contact-name">Frank Edwards</h2>
          <h2 class="contact-role">Tumuaki Whakaruruhau / Te Punaka Ōwheo</h2>
          <a class="email"> &#9993; frank.edwards@op.ac.nz</a><br/>
          <a class="email"> &#x1F4DE; 021 735 823</a>
        </div>
        <div id="contact3">
          <h2 class="contact-name">Angelina Kiore</h2>
          <h2 class="contact-role">Kaiāwhina Tauira Māori / Te Punaka Ōwheo (Otago Polytechnic)</h2>
          <a class="email"> &#9993; kylie.hohaia@op.ac.nz</a><br/>
          <a class="email"> &#x1F4DE; 027 860 4968</a>
        </div>
      </div>
      <div class="col-sm">
      <div class="container">
      <h1 class="contact-us">Contact us using the details below and we'll respond as soon as possible. (Required *)</h1>
  <div class="row">
    <div class="col-sm">
      <input placeholder="Name*" type="text" className="form-control"></input>
    </div>
    <div class="col-sm">
    <input placeholder="Email*" type="text" className="form-control"></input><br/>
    </div>
  </div>
  <div class="row">
<div class="col-sm">
  <input placeholder="Subject*" type="text" className="form-control"></input><br/>
  </div>
</div>
<div class="row">
  <div class="col-sm">
  <textarea placeholder="Message*" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea><br/>
      </div>
    </div>
      <div class="row">
  <div class="col-sm">
<button className="sub-btn contact-btn">Submit</button>
      </div>
      </div>
      </div>
    </div>
  </div>
</div>
<div style = {{height:"300px"}}></div>
<Footer/>
</div>
    )
}

export default Contact;
