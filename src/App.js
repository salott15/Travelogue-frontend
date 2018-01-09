import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

export default class App extends Component {


  render() {
    return (
      <div className="Main">

        <div className="welcome">
            <h2>Welcome to</h2>
            <h1>TRAVELOGUE</h1>
        </div>
        <div className="about">
          <h3>Keep all your travel in one place.</h3>
          <p>Use Travelogue to organize your travel memories by state.</p>
        </div>
        <img src="/about.jpeg" className="aboutimg" alt="" />

        <img src="/features.jpeg" className="featuresimg" alt=""/>

        <div className="features">
          <h3>Store what's important.</h3>
          <p>Upload trip journal entries and favorite places.</p>
        </div>

        <div className="start">
          <h3>Get started:</h3>
          <p>Create an account <Link to="/createaccount">here.</Link></p>
        </div>

      </div>
    );
  };
}
