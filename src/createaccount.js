import React, { Component } from 'react';
import './createaccount.css';
import {connect} from 'react-redux';
import {newUser} from './redux/users/useractions';

class CreateAccount extends Component {
  render() {
  	console.log(this.props.error)
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="createaccount">
				<h2>Create an account</h2>
				<p>{this.props.error}</p>
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

const mapStateToProps = function(state, ownProps){
	return {
		error: state.users.errorMessage
	}
}

const mapDispatchToProps = function(dispatch){
	return {newUser: (evt) => {
		let firstname = document.getElementById('firstname').value,
			lastname = document.getElementById('lastname').value,
			email = document.getElementById('email').value,
			password = document.getElementById('password').value;
		newUser({firstname, lastname, email, password}, dispatch)
	}}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);