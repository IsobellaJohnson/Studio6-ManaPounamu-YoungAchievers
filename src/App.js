import * as api from './api'
import './App.css';

function App() {
  return (
  <div className="App">
    <div className="container">
      <form>
      <div className="row">
    <div className="col">
      <label htmlFor="nominatingSchool" className="form-label">Nominating School*</label>
      <input type="text" className="form-control"></input>
    </div>
      <div className="col">
      <label htmlFor="level" className="form-label">Level*</label>
    <select class="form-select" aria-label="Default select example">
      <option selected>-- Select a level --</option>
      <option value="1">Teina/Junior</option>
      <option value="2">Tuakana/Senior</option>
    </select>
    </div>
    <div className="col">
    <label htmlFor="year" className="form-label">Year*</label>
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
    <label htmlFor="exampleInputPassword1" className="form-label">Student Name*</label>
    <input type="text" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="col">
    <label htmlFor="exampleInputPassword1" className="form-label">Iwi*</label>
    <input type="text" className="form-control" id="exampleInputPassword1"></input>
  </div>
  </div>
  <div className="row">
    <div className="col-md-4">
    <label htmlFor="exampleInputPassword1" className="form-label">Student Photo*</label>
    <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01"></input>
</div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
    </div>
  </div>
  );
}

export default App;
