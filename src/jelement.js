import React, { Component } from 'react';
import './jelement.css';

export default function JournalElement(props){
  	return(
  		<div>
  		<div className="journal">
			<h3>{this.props.state}</h3>
			<h4>{this.props.date}</h4>
			<p>{this.props.body}</p>
			<button>Delete Journal</button>
		</div>
		</div>
		);
}