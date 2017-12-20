import React, { Component } from 'react';
import './plelement.css';
import moment from 'moment';

export default function PlaceElement(props) {
  	return(
  		<div className="place">
			<h3>{props.state}</h3>
			<h4>{moment(props.dateAdded).format('LL')}</h4>
			<h4>{props.placename}</h4>
			<p>{props.placereview}</p>
			<button data-pid={props._id} onClick={props.deletePlace}>Delete Place</button>
		</div>
		);
}