import React, { Component } from 'react';
import {connect} from 'react-redux';
import './statepage.css';
import {getUserJournalsByState, deleteJournal} from './redux/journals/journalactions';
import JournalElement from './jelement';
import PlaceElement from './plelement';
import {getUserPlacesByState, deletePlace} from './redux/places/placeactions';

class StatePage extends Component {
	
	componentDidMount(){
		this.props.getUserJournalsByState()
		this.props.getUserPlacesByState()
	}		

  render() {
  	var USState = localStorage.getItem("state"), 
  	journals = [],
  	places = []
  	if(this.props.journals){
  	 journals = this.props.journals.map((jrnl, index) => {
  		return <JournalElement {...jrnl} key={index} deleteJournal={(e) => {this.props.deleteJournalElement(e)}}/>
})};
  	
  	if(this.props.places){
  	 places = this.props.places.map((place, index) => {
  		return <PlaceElement {...place} key={index} deletePlace={(e) => {this.props.deletePlaceElement(e)}}/>
  	})};
  	return(
  		<div>
  		<h1>TRAVELOGUE</h1>

		<div className="board">
			<h2>{USState}</h2>
			
				{journals}
			
			{places}
		</div>

		<div className="bottom"></div>
		</div>
  		);
  	};
  }


  const MapStateToProps = function(state, ownProps){
    console.log(state)
	return {journals: state.journal.currentJournals, 
    places: state.place.currentPlaces}
}

const MapDispatchToProps = function(dispatch){
	return {getUserJournalsByState: () => {
		getUserJournalsByState(dispatch)
	}, getUserPlacesByState: () => {
		getUserPlacesByState(dispatch)
	},deleteJournalElement: (evt) => {
    deleteJournal(evt.target.getAttribute("data-jid"), dispatch)
  },deletePlaceElement: (evt) => {
    deletePlace(evt.target.getAttribute("data-pid"), dispatch)
  }}
}

export default connect(MapStateToProps, MapDispatchToProps)(StatePage);