import React from 'react';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import './nav-bar.css';

import App from './App';
import CreateAccount from './createaccount';
import Journals from './journals';
import Login from './login';
import StatePage from './statepage';
import UserMain from './usermain';
import Places from './places.js';
import NewJournal from './newjournal.js';
import NewPlace from './newplace.js';
import { loginComplete } from './redux/users/useractions'

class NavBar extends React.Component {

	componentDidMount() {
		const token = localStorage.getItem('token')
		const email = localStorage.getItem('email')

		if(token) {
			const data = {
				token,
				email
			}
			this.props.dispatch(loginComplete(data))
		}
	}

	render() {
		return (
			<Router>
				<div>

					<header className="nav-bar">
						
						<p className="title"><Link to="/" style={{textDecoration: 'none', color: "white"}}>TRAVELOGUE</Link></p>
						<p className="login"><Link to="/login" style={{textDecoration: 'none', color: "white"}}>Login</Link></p>
						{this.props.loggedIn
							?
							<p className="login">
								<span
									onClick={() => {
										localStorage.removeItem('token')
										localStorage.removeItem('uid')
										localStorage.removeItem('email')
										window.location = "/"
									}}
									style={{textDecoration: 'none', color: "white"}
								}>
									Logout
								</span>
							</p>
							:
							""
						}
						<p className="mypage"><Link to="/usermain" style={{textDecoration: 'none', color: "white"}}>My Page ||</Link></p>
						<p className="newjournallink"><Link to="/newjournal" style={{textDecoration: 'none', color: "white"}}>New Journal ||</Link></p>
						<p className="newplacelink"><Link to="/newplace" style={{textDecoration: 'none', color: "white"}}>New Place ||</Link></p>
					</header>

					<main>
						<Route exact path="/" component={App} />
						<Route exact path="/createaccount" component={CreateAccount} />
						<Route exact path="/journals" component={Journals} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/statepage" component={StatePage} />
						<Route exact path="/usermain" component={UserMain} />
						<Route exact path="/places" component={Places} />
						<Route exact path="/newjournal" component={NewJournal} />
						<Route exact path="/newplace" component={NewPlace} />
					</main>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.users.loggedIn
	}
}

export default connect(mapStateToProps)(NavBar)
