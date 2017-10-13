import { combineReducers } from 'redux-immutable';

const initialState = {
	lastSessionEntry: "",
	currentJournals: []
}

function addSessionEntry(state = initialState, action) {
		switch (action.type)
	{
		case 'ADD_JOURNAL' :
		console.log("add journal")
		return new Date();
		default:
		return state;
	}
}

function getCurrentJournals(state = initialState, action) {
	if(action.type === "GET_JOURNALS_BY_STATE"){
	return {...state, currentJournals: action.paylod}}
	else if(action.type === "GET_JOURNALS"){
		return {...state, currentJournals: action.paylod}
	}
return state
}

function journalReducer(state = initialState, action)
{
  return {
  	lastSessionEntry:
		addSessionEntry(state.lastSessionEntry,action),
	currentJournals:
		getCurrentJournals(state.currentJournals, action)
  };
}

export default journalReducer;