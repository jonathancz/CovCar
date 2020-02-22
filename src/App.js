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
          <Route path="/newdriver" component={NewDriver}/>
        </div>
      </Router>
    )}
  }

class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDriver: ''
    }
  }

  render() {
    return(
      <div className="driverOptions">
        <Link to="/newdriver">I am a new driver.</Link><br></br>
        <Link to="/returningdriver">I am a returning driver.</Link>
      </div>
    )
  }
}

// Component for creating a new driver entry
class NewDriver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      churchName: '',
      denomination: '',
      departureTime: '',
      departureDate: null,
      pickupPoint: 'carterCircle',
      numberOfSeats: 0,
      phone: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Inserts the inputted data into the state object
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
      //alert('First Name: ' + this.state.firstName);   
  }

  // Handler for submit button to create a new driver
  handleSubmit(event) {
    //alert('Your entry: ' + JSON.stringify(this.state)); 
    
    // Add new driver data to database

    // QUERY - hardcoded for now, idk if there's a better way to do it
    var sql = 'INSERT INTO DRIVERS(FirstName, LastName, Church, Denomination, DepartureTime, DepartureDate, PickupPoint, NumberOfSeats, PhoneNumber, Email) VALUES (' +
      this.state.firstName + ', ' + this.state.lastName + ', ' + this.state.churchName + ', ' + this.state.denomination + ', ' + this.state.departureTime + ', ' +
      this.state.departureDate + ', ' + this.state.pickupPoint + ', ' + this.numberOfSeats + ', ' + this.state.phone + ', ' + this.state.email + ');';

    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: 'localhost',
      username: 'covcar',
      password: 'covcar2020sql',
      database: 'covcar'
    });
    con.connect((err) => {
      if (err) throw err;
      console.log("Connected!");
      con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Result: " + result);
        return (
          <NewDriverSuccess name={this.state.firstName + this.state.lastName}/>
        )
    });
  });
  }

  // Form for the driver input fields
  render() {
    return (
      <div className="DriverPage">
        <h2>You are on the new driver page.</h2>
        <div className="entryFields">
          <label>
            First Name: 
            <input type="text" name="firstName" onChange={this.handleChange}/>
          </label><br></br>
          <label>
            Last Name: 
            <input type="text" name="lastName" onChange={this.handleChange} />
          </label><br></br>
          <label>
            Church Name: 
            <input type="text" name="churchName" onChange={this.handleChange} />
          </label><br></br>
          <label>
            Denomination: 
            <input type="text" name="denomination" onChange={this.handleChange} />
          </label><br></br>
          <label>
            Date: 
            <input type="date" name="departureDate" onChange={this.handleChange} />
          </label><br></br>
          <label>
            Departure Time: 
            <input type="text" name="departureTime" onChange={this.handleChange} />
          </label><br></br>
          <select name="pickupPoint" onChange={this.handleChange}>
            <option value="carterCircle">Carter Circle</option>
            <option value="macCircle">Mac Circle</option>
          </select><br></br>
          <label>
            Number Of Seats: 
            <input type="number" name="numberOfSeats" onChange={this.handleChange} />
          </label><br></br>
          <label>
            Phone Number: 
            <input type="tel" name="phone" onChange={this.handleChange} />
          </label><br></br>
          <label>
            Email: 
            <input type="text" name="email" onChange={this.handleChange} />
          </label><br></br>
        </div>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

class NewDriverSuccess extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="newDriverSuccess">
        <h2>Thank you, {this.props.name}, you were successfully added to the database!</h2>
      </div>
    )
  }
}

// TODO: remove this later, I'm pretty sure it's useless
// class PickupDropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = (event) => {
//     /*console.log(event.target.value);
//     this.state = {value: event.target.value};*/
//     var selection = event.target.value;
//     this.props.onPickupDropdown(selection);
//   }

//   render () {
//     return (
//       <select className="pickupDropdown" value={this.state.value} onChange={this.handleChange}>
//         <option value="carterCircle">Carter Circle</option>
//         <option value="macCircle">Mac Circle</option>
//       </select>
//     )
//   }
// }

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
