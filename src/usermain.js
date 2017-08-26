import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './usermain.css';

import Map from './map.js';

export default class UserMain extends Component {
  render() {
    return (
    	<Router>
    	<div>
    		<h1>TRAVELOGUE</h1>

			<div className="usermap">
  				<h2>Sari's Map</h2>
  				<Map />
  				<ul className="options">
		    		<li><Link to="/journals" style={{textDecoration: 'none', color: "black"}}>Journals</Link></li>
    				<li>Photos</li>
		    		<li>Places</li>
		  		</ul>
			</div>
			<div className='bottom'></div>
		</div>
		</Router>
		);
};
}