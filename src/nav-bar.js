import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './nav-bar.css';

import App from './App';
import CreateAccount from './createaccount';
import Journals from './journals';
import Login from './login';
import StatePage from './statepage';
import UserMain from './usermain';

export default function NavBar(props){
		return (
			<Router>
				<div>

					<header className="nav-bar">
						<p className="title"><Link to="/" style={{textDecoration: 'none', color: "white"}}>TRAVELOGUE</Link></p>
						<p className="login"><Link to="/login" style={{textDecoration: 'none', color: "white"}}>Login</Link></p>
					</header>

					<main>
						<Route exact path="/" component={App} />
						<Route exact path="/createaccount" component={CreateAccount} />
						<Route exact path="/journals" component={Journals} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/statepage" component={StatePage} />
						<Route exact path="/usermain" component={UserMain} />
					</main>
				</div>
			</Router>
		);
}