import React, { Component } from 'react';
import './jelement.css';

export default function JournalElement(props){
  	return(
  		<div className="journal">
			<h3>{props.state}</h3>
			<h4>{props.date}</h4>
			<p>{props.body}</p>
			<button data-jid={props._id} onClick={props.deleteJournal}>Delete Journal</button>
		</div>
		);
}