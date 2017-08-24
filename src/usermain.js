import React, { Component } from 'react';
import './usermain.css';

import Map from './map.js';

export default class UserMain extends Component {
  render() {
    return (
    	<div>
    		<h1>TRAVELOGUE</h1>

			<div className="usermap">
  				<h2>Sari's Map</h2>
  				<Map />
  				<ul className="options">
		    		<li>Journals</li>
    				<li>Photos</li>
		    		<li>Places</li>
		  		</ul>
			</div>
			<div className='bottom'></div>
		</div>
		);
};
}