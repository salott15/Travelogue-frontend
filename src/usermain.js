import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './usermain.css';

import Map from './map.js';

class UserMain extends Component {
  constructor(props)
  {
    super(props);
    console.log(props);
  }
  render() {
    const loggedIn = (this.props.loggedIn) ? 'tru' : 'nadda'
    if(!this.props.loggedIn){
      // window.location = '/login';
      return (<div>Not Logged In</div>)
    }
    return (
    	<Router>
    	<div>
      <h3>{loggedIn}</h3>
    		<h1>TRAVELOGUE</h1>

			<div className="usermap">
  				<h2>Sari's Map</h2>
  				<Map />
  				<ul className="options">
		    		<li><Link to="/journals" style={{textDecoration: 'none', color: "black"}}>Journals</Link></li>
		    		<li><Link to="/places" style={{textDecoration: 'none', color: "black"}}>Places</Link></li>
		  		</ul>
			</div>
			<div className='bottom'></div>
		</div>
		</Router>
		);
};
}

const mapStateToProps = (state, ownProps) => {
	console.log('state is:',state, ownProps);
	return { }
};

 const mapDispatchToProps = (dispatch) => {
 	return { }
 }

 export default connect( mapStateToProps, mapDispatchToProps )(UserMain);
