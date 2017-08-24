import React, { Component } from 'react';
import './statepage.css';

export default class StatePage extends Component {
  render() {
  	return(
  		<div>
  		<h1>TRAVELOGUE</h1>

		<div className="board">
			<h2>Oregon</h2>
			<img src="./images/oregon.png" className="state"/>
			<div className="journal">
				<h3>Oregon</h3>
				<h4>August 15, 2017</h4>
				<p>We spent the day exploring Cannon Beach on the coast.  We finished with dinner at Pelican Brewery.</p>
				<a href="/journals">See more journals from Oregon.</a>
			</div>
			<div className="photos">
				<img src="./images/beach.jpg" width="200"/><br/>
				<a href="/photos">See more photos from Oregon.</a>
			</div>
			<div className="places">
				<h3>Pelican Brewery</h3>
				<h4>Cannon Beach</h4>
				<p>Super cheap burgers made with Tillamook and a really friendly staff!</p>
				<a href="/places">See more places from Oregon.</a>
			</div>
		</div>

		<div className="bottom"></div>
		</div>
  		);
  	};
  }