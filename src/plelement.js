import React, { Component } from 'react';
import './plelement.css';

export default class PlaceElement extends Component {
  render() {
  	return(
  		<div>
  		<div className="place">
			<h3>Oregon</h3>
			<h4>August 15, 2017</h4>
			<h4>Rogue Brewery</h4>
			<p>Blah Blah Blah review.</p>
		</div>
		</div>
		);
  };
}