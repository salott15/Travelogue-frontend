import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Link} from 'react-router-dom';
import './places.css';
import {getUserPlaces} from './redux/places/placeactions';
import {getUser} from './redux/users/useractions';
import {deletePlace} from './redux/places/placeactions';

import PlaceElement from './plelement';

class Places extends Component {

	componentDidMount(){
		this.props.getUserPlaces();
		this.props.getUser();
	}

  render() {
  	var places = []
  	console.log(this.props)
  	if(this.props.places){
  	 places = this.props.places.map((plc, index) => {
  		return <PlaceElement {...plc} key={index} deletePlace={(e) => {this.props.deletePlaceElement(e)}} />
})};
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="board">
				<h2>{this.props.name}&rsquo;s Places</h2>
				{places}
				<div className="addPlace"><Link to="/newplace" style={{textDecoration: 'none'}}>
					<h3>Add a new place!</h3></Link>
				</div>

			</div>

			<div className="bottom"></div>
		</div>
  		);
  	};
  }

const MapStateToProps = function(state, ownProps){
	console.log(state)
	return {places: state.place.currentPlaces,
		firstname: state.users.loggedIn}
}

const MapDispatchToProps = function(dispatch){
	return {getUserPlaces: () => {
		getUserPlaces(dispatch)
	}, getUser: () => {
		getUser(dispatch)
	}, deletePlaceElement: (evt) => {
		deletePlace(evt.target.getAttribute("data-pid"), dispatch)
	}}
}

export default connect(MapStateToProps, MapDispatchToProps)(Places);
