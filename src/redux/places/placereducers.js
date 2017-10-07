import { combineReducers } from 'redux-immutable';

const initialState = {
	lastSessionEntry: ""
}

function addSessionEntry(state = initialState, action) {
		switch (action.type)
	{
		case 'ADD_PLACE' :
		console.log("add place")
		return new Date();
		default:
		return state;
	}
}

function placeReducer(state = initialState, action)
{
  return {
  	lastSessionEntry:
		addSessionEntry(state.lastSessionEntry,action)
  };
}

export default placeReducer;