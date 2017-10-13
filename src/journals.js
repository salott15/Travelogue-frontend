import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './journals.css';
import {getUserJournals} from './redux/journals/journalactions';
import {getUser} from './redux/users/useractions';
import {deleteJournal} from './redux/journals/journalactions';

import JournalElement from './jelement';

class Journals extends Component {

	componentDidMount(){
		this.props.getUserJournals(),
		this.props.getUser(),
		//this.props.deleteJournalElement = function(){console.log("abc")}
	}

  render() {
  	var journals = []
  	if(this.props.journals.currentJournals){
  		//journalsArray = 
  	 journals = this.props.journals.currentJournals.map((jrnl, index) => {
  		return <JournalElement {...jrnl} key={index} deleteJournal={this.props.deleteJournalElement} />
})};

  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="board">
				<h2>'s Journals</h2>
				{journals}
				<div className="addjournal"><Link to="/newjournal" style={{textDecoration: 'none'}}>
					<h3>Add a new journal!</h3></Link>
				</div>

			</div>

			<div className="bottom"></div>
		</div>
  		);
  	};
  }

const MapStateToProps = function(state, ownProps){
	return {journals: state._root.entries[1][1].currentJournals}
}

const MapDispatchToProps = function(dispatch){
	return {getUserJournals: () => {
		getUserJournals(dispatch)
	}, getUser: () => {
		getUser(dispatch)
	}, deleteJournalElement: (evt) => {
		console.log(evt)
		{/*let jid = evt.currentTarget.getAttribute("data-jid")
		deleteJournal(jid, dispatch)*/}
	}}
}

export default connect(MapStateToProps, MapDispatchToProps)(Journals);