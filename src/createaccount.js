import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './createaccount.css';

export default class CreateAccount extends Component {
  render() {
  	return(
  		<Router>
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="createaccount">
				<h2>Create an account</h2>
				<form>
					<label>First Name</label>
					<input type="text" name="firstname"/>
		
					<label>Last Name</label>
					<input type="text" name="lastname"/>
		
					<label>Email</label>
					<input type="email" name="email"/>
		
					<label>Password</label>
					<input type="text" name="password"/>
		
					<label>Confirm Password</label>
					<input type="text" name="cpassword"/>
				</form>
				<br/>
				<br/>
				<button><Link to="/usermain" style={{textDecoration: 'none', color: "white"}}>Let's go!</Link></button>
			</div>
		</div>	
		</Router>		
  		);
  	};
}