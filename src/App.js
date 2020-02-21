import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <h1>Welcome to CovCar!</h1>
      </header>
      <body>
        <div className="userButtons"><InputForm /></div>
      </body>
    </div>
  );
}

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDriverButtonClick() {

  }

  handleRiderButtonClick() {

  }

  render() {
    return (
      <Router>
        <div className="buttons">
          <nav>
            <ul>
              <li>
                <Link to="/driver">I am a driver</Link>
              </li>
              <li>
                <Link to="/rider">I am a rider</Link>
              </li>
            </ul>
          </nav>

          <hr />
          <Route path="/driver" component={Driver} />
          <Route path="/rider" component={Rider} />
        </div>
      </Router>
    )}
  }

const pickupOptions = [
    'Carter Circle', 'Mac Circle'
  ] 
class Driver extends React.Component {
  constructor(props) {
    super(props);

  }

 

  addDriver() {
      var driver = {
        DriverId: null,
        FirstName: null
      };

      
  }

  render() {
    return (
      <div className="DriverPage">
        <h1>You are on the driver page.</h1>
        <div className="entryFields">
          <label>
            First Name: 
            <input type="text" name="firstName" />
          </label><br></br>
          <label>
            Last Name: 
            <input type="text" name="lastName" />
          </label><br></br>
          <label>
            Church Name: 
            <input type="text" name="churchName" />
          </label><br></br>
          <label>
            Denomination: 
            <input type="text" name="denomination" />
          </label><br></br>
          <label>
            Departure Time: 
            <input type="text" name="departureTime" />
          </label><br></br>
          <input type="submit" value="Submit" />
        </div>
      </div>
    )
  }
}

class Rider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="RiderPage">
        <h1>You are on the rider page.</h1>
      </div>
    )
  }
}

export default App;
