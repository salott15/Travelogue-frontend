import React from 'react';
import { connect } from 'react-redux';
import './login.css';
import {login, testAuth} from './redux/users/useractions'

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
  	/*console.log(this.props)
		if(this.props.loggedIn)
		{
			console.log('ran?', Router);
			return RedirectToAction("/usermain", new {name: state._root.entries["0"][1].name});
		}*/
  	return(
  		<div>
				<h1>TRAVELOGUE</h1>
				<div className="loginform">
				<h2>Login</h2>
				<p className="demoAccountInfo">Demo account login: abc@abc.com || password: abc</p>
				<form onSubmit={this.props.login}>
					<label>Email</label>
					<input id="login-email" type="email" name="email"/>
					<label>Password</label>
					<input id="login-password" type="password" name="password"/><br/> <br/>
					<button>Lets go!</button>
					<br/>
				</form>
				<button style={{display:'none'}} onClick={this.props.testAuth}>Click</button>
			</div>
		</div>
  		);
  };
 }

 const mapDispatchToProps = (dispatch) => {
 	return {
 		login: (e) => {
 			e.preventDefault();
 		// 	console.log('e',document.getElementById('login-email').value, document.getElementById('login-password').value)
			let usrName = document.getElementById('login-email').value,
					pw = document.getElementById('login-password').value;
 			login({username: usrName, password:pw},dispatch);
 		},
		testAuth: (e) =>{ testAuth(dispatch); }
 	}
 }

 export default connect( null, mapDispatchToProps )(Login);
