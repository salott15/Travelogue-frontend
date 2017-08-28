import React, { Component } from 'react';
import './places.css';

import PlaceElement from './plelement';

export default class Places extends Component {
  render() {
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="board">
				<h2>Sari's Places</h2>
				<PlaceElement />
				
			</div>

			<div className="bottom"></div>
		</div>
  		);
  	};
  }