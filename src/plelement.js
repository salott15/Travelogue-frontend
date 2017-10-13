import React, { Component } from 'react';
import './plelement.css';

export default function PlaceElement(props) {
  	return(
  		<div className="place">
			<h3>{props.state}</h3>
			<h4>{props.dateAdded}</h4>
			<h4>{props.placename}</h4>
			<p>{props.placereview}</p>
			<button>Delete Place</button>
		</div>
		);
}