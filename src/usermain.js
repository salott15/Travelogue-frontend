import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './usermain.css';

import Map from './map.js';

class UserMain extends Component {
  render() {
    return (
    	<div>
    		<h1>TRAVELOGUE</h1>
			<div className="usermap">
  				<h2>{this.props.usrName}&rsquo;s Map</h2>
  				<Map />
  				<ul className="options">
		    		<li><Link to="/journals" style={{textDecoration: 'none', color: "black"}}>Journals</Link></li>
		    		<li><Link to="/places" style={{textDecoration: 'none', color: "black"}}>Places</Link></li>
		  		</ul>
			</div>
			<div className='bottom'></div>
		</div>
		);
};
}

const mapStateToProps = (state, ownProps) => {
	console.log('state is:',state, ownProps);
	return {
    usrLoggedIn:state.users.loggedIn,
    usrName:state.users.name
  }
};

 const mapDispatchToProps = (dispatch) => {
 	return { }
 }

 export default connect( mapStateToProps, mapDispatchToProps )(UserMain);
