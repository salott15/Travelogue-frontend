import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './journals.css';

import JournalElement from './jelement';

export default class Journals extends Component {
  render() {
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="board">
				<h2>Sari's Journals</h2>
				<JournalElement />
				<div className="addjournal"><Link to="/newjournal" style={{textDecoration: 'none'}}>
					<h3>Add a new journal!</h3></Link>
				</div>

			</div>

			<div className="bottom"></div>
		</div>
  		);
  	};
  }
