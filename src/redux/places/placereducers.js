import { combineReducers } from 'redux-immutable';

const initialState = {
	lastSessionEntry: "", 
	currentPlaces: []
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

function getCurrentPlaces(state = initialState, action) {
	console.log("a", action)
	if(action.type === "GET_PLACES_BY_STATE"){
		console.log(action.paylod)
	return {...state, currentPlaces: action.paylod}}
return state
}

function placeReducer(state = initialState, action)
{
  return {
  	lastSessionEntry:
		addSessionEntry(state.lastSessionEntry,action),
	currentPlaces:
		getCurrentPlaces(state.currentPlaces, action)
  };
}

export default placeReducer;