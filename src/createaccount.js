import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './createaccount.css';
import {connect} from 'react-redux';
import {newUser} from './redux/users/useractions';

class CreateAccount extends Component {
  render() {
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="createaccount">
				<h2>Create an account</h2>
				<div>
					<label>First Name</label>
					<input type="text" name="firstname" id="firstname"/>

					<label>Last Name</label>
					<input type="text" name="lastname" id="lastname"/>

					<label>Email</label>
					<input type="email" name="email" id="email"/>

					<label>Password</label>
					<input type="text" name="password" id="password"/>

					<label>Confirm Password</label>
					<input type="text" name="cpassword" id="cpassword"/>
					<br/>
				<br/>
				<button onClick={this.props.newUser}>Start my Travelogue!</button>
				</div>
			</div>
		</div>	
  		);
  	};
}

const MapStateToProps = function(state, ownProps){
	return {
	}
}

const MapDispatchToProps = function(dispatch){
	return {newUser: (evt) => {
		console.log(evt)
		let firstname = document.getElementById('firstname').value,
			lastname = document.getElementById('lastname').value,
			email = document.getElementById('email').value,
			password = document.getElementById('password').value;
		newUser({firstname, lastname, email, password}, dispatch)
	}}
}

export default connect(MapStateToProps, MapDispatchToProps)(CreateAccount);