import React, { Component } from 'react';
import './journals.css';

export default class Journals extends Component {
  render() {
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="board">
				<h2>Sari's Journals</h2>
				<div className="journal">
					<h3>Oregon</h3>
					<h4>August 15, 2017</h4>
					<p>We spent the day exploring Cannon Beach on the coast.  We finished with dinner at Pelican Brewery.</p>
				</div>

				<div className="journal">
					<h3>Montana</h3>
					<h4>July 7-9, 2017</h4>
					<p>We camped out in Makoshika State Park, and hiked some beautiful trails. One night we hiked to a peak and watched the sunset from a scenic point.</p>
				</div>
			</div>

			<div className="bottom"></div>
		</div>
  		);
  	};
  }