import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './login.css';

import NavBar from './nav-bar.js';

export default class Login extends React.Component {
  render() {
  	return(
  		<Router>
  		<div>
  		<h1>TRAVELOGUE</h1>

		<div className="loginform">
			<h2>Login</h2>
			<form>
				<label>Email</label>
				<input type="email" name="email"/>
				<label>Password</label>
				<input type="text" name="password"/>
			</form><br/>
			<br/>
			<button><Link to="/usermain" style={{textDecoration: 'none', color: "white"}}>Let's go!</Link></button>
		</div>
		</div>
		</Router>
  		);
  };
 }