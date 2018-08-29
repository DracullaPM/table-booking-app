import React, { Component } from 'react';
import './App.css';
import loaderImg from "./images/loader.gif";

class App extends Component {
  state = {
    status: ""
  }

  checkReservation  = () => {
    this.setState({
      status: "checking for availability"
    });

    window.setTimeout(() => {
      this.setState({
        status: ""
      });
    }, 2000);
  }

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

        {this.state.status === "" ? 
            <button className="bookButton" onClick={this.checkReservation}>
              SignUp
            </button>
          :
            <div className="bookingStatus">
              <img className="loadingIcon" src={loaderImg} alt="Loading ..."/>
              {this.state.status}
            </div>
        }
      </div>
    );
  }
}

export default App;
