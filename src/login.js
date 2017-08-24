import React from 'react';
import './login.css';

import NavBar from './nav-bar.js';

export default class Login extends React.Component {
  render() {
  	return(
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
			<button>Let's go!</button>
		</div>
		</div>
  		);
  };
 }