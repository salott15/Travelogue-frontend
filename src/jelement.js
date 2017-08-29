import React, { Component } from 'react';
import './jelement.css';

export default class JournalElement extends Component {
  render() {
  	return(
  		<div>
  		<div className="journal">
			<h3>Oregon</h3>
			<h4>August 15, 2017</h4>
			<p>We spent the day exploring Cannon Beach on the coast.  We finished with dinner at Pelican Brewery.</p>
			<button>Delete Journal</button>
		</div>
		</div>
		);
  };
}