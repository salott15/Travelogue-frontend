import { combineReducers } from 'redux-immutable';

const initialState = {
	lastSessionEntry: ""
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

function journalReducer(state = initialState, action)
{
  return {
  	lastSessionEntry:
		addSessionEntry(state.lastSessionEntry,action)
  };
}

export default journalReducer;