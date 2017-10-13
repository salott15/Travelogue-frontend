import React, { Component } from 'react';
import {connect} from 'react-redux';
import './statepage.css';
import {getUserJournalsByState} from './redux/journals/journalactions';
import JournalElement from './jelement';
import PlaceElement from './plelement';
import {getUserPlacesByState} from './redux/places/placeactions';

class StatePage extends Component {
	
	componentDidMount(){
		this.props.getUserJournalsByState()
		this.props.getUserPlacesByState()
	}		

  render() {
  	var State = localStorage.getItem("state"), 
  	journals = [],
  	places = []
  	console.log(this.props)
  	if(this.props.journals.currentJournals){
  		//journalsArray = 
  	 journals = this.props.journals.currentJournals.map((jrnl, index) => {
  		return <JournalElement {...jrnl} key={index} />
})};
  	
  	if(this.props.places.currentPlaces){
  	 places = this.props.places.currentPlaces.map((place, index) => {
  		return <PlaceElement {...place} key={index} />
  	})};
  	return(
  		<div>
  		<h1>TRAVELOGUE</h1>

		<div className="board">
			<h2>{State}</h2>
			
				{journals}
			
			{places}
		</div>

		<div className="bottom"></div>
		</div>
  		);
  	};
  }


  const MapStateToProps = function(state, ownProps){
	return {journals: state._root.entries[1][1].currentJournals, places: state._root.entries[2][1].currentPlaces}
}

const MapDispatchToProps = function(dispatch){
	return {getUserJournalsByState: () => {
		getUserJournalsByState(dispatch)
	}, getUserPlacesByState: () => {
		getUserPlacesByState(dispatch)
	}}
}

export default connect(MapStateToProps, MapDispatchToProps)(StatePage);