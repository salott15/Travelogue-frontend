import React, { Component } from 'react';
import './phelement.css';

export default class PhotoElement extends Component {
  render() {
  	return(
  		<div>
  		<div className="photo">
			<h3>Oregon</h3>
			<h4>August 15, 2017</h4>
			<img src="/travel.jpeg" className="phimg" />
			<p>Blah Blah Blah caption.</p>
		</div>
		</div>
		);
  };
}