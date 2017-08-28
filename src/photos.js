import React, { Component } from 'react';
import './photos.css';

import PhotoElement from './phelement';

export default class Photos extends Component {
  render() {
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="photoboard">
				<h2>Sari's Photos</h2>
				<PhotoElement />
				
			</div>

			<div className="bottom"></div>
		</div>
  		);
  	};
  }