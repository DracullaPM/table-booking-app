import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading">Table Booking App</h1>
        <div className="bookingContainer">
          <div className="block">
            <label>Name</label>
            <input className="nameInp" type="text" placeholder="Type your name here"/>
          </div>
          <div className="block">
            <label>Date</label>
            <input className="dateInp" type="date"/>
          </div>
          <div className="block">
            <label>Time</label>
            <input className="timeInp" type="time"/>
          </div>
          <div className="block">
            <label>No of Persons</label>
            <input className="noPInp" type="number" placeholder="0"/>
          </div>

        </div>
        <div className="timeDetails">
          <div className="details">AppointMentDetails</div>
          <div className="time">1:00pm to 9:00pm</div>
        </div>

        <button className="bookButton">SignUp</button>

        <div className="bookingStatus"></div>
      </div>
    );
  }
}

export default App;
