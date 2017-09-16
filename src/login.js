import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './login.css';
import {login} from './redux/users/useractions'

import NavBar from './nav-bar.js';

class Login extends React.Component {
	constructor(props) {
		super(props);
		console.log('Props:', props);
	}

  render() {
  	console.log(this.props)
  	const loggedIn = (this.props.loggedIn) ? 'tru' : 'nadda'
  	return(
  		<Router>
  		<div>
  		<h1>TRAVELOGUE</h1>

  		{loggedIn}

		<div className="loginform">
			<h2>Login</h2>
			<form onSubmit={this.props.login}>
				<label>Email</label>
				<input type="email" name="email"/>
				<label>Password</label>
				<input type="text" name="password"/><br/> <br/>
				<button>Lets go!</button>
			</form>
		</div>
		</div>
		</Router>
  		);
  };
 }

const mapStateToProps = (state, ownProps) => {
	console.log('state is:',state, ownProps);
	return {
		loggedIn: state._root.entries[0][1].loggedIn
	}
};

 const mapDispatchToProps = (dispatch) => {
 	return {
 		login: (e) => {
 			e.preventDefault();
 			console.log(e)
 			dispatch(login({username: "abc@abc.com", password:"abc"}));
 		}
 	}
 }

 export default connect( mapStateToProps, mapDispatchToProps )(Login);
