import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './places.css';

import PlaceElement from './plelement';

export default class Places extends Component {
  render() {
  	return(
  		<Router>
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="board">
				<h2>Sari's Places</h2>
				<PlaceElement />
				<div className="addPlace"><Link to="/newplace" style={{textDecoration: 'none'}}>
					<h3>Add a new place!</h3></Link>
				</div>
				
			</div>

			<div className="bottom"></div>
		</div>
		</Router>
  		);
  	};
  }