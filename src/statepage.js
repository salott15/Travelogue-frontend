import React, { Component } from 'react';
import {connect} from 'react-redux';
import './statepage.css';
import {getUserJournalsByState} from './redux/journals/journalactions';
import JournalElement from './jelement';

class StatePage extends Component {
	
	componentDidMount(){
		this.props.getUserJournalsByState()
	}		

  render() {
  	var State = localStorage.getItem("state"), 
  	journals = {},
  	journalsArray = this.props.journals
  	if(this.props.journals){
  		//journalsArray = 
  	 journals = journalsArray.map((jrnl, index) => {
  		return <JournalElement {...jrnl} key={index} />
  	})};
  	return(
  		<div>
  		<h1>TRAVELOGUE</h1>

		<div className="board">
			<h2>{State}</h2>
			
			<div className="journal">
				{journals}
			</div>
			<div className="places">
				
			</div>
		</div>

		<div className="bottom"></div>
		</div>
  		);
  	};
  }


  const MapStateToProps = function(state, ownProps){
  	console.log(state);
	return {journals: state._root.entries[1][1].currentJournals}
}

const MapDispatchToProps = function(dispatch){
	return {getUserJournalsByState: () => {
		getUserJournalsByState(dispatch)
	}}
}

export default connect(MapStateToProps, MapDispatchToProps)(StatePage);