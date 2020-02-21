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

         
class Driver extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="DriverPage">
        <h1>You are on the driver page.</h1>
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
