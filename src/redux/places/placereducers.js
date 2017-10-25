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
	return {...state, currentPlaces: action.paylod}}
	else if(action.type === "GET_PLACES"){
		console.log(action.paylod, action)
		return {...state, currentPlaces: action.paylod.placesRef}
	}
	else if (action.type === "DELETE_PLACE"){
		var newCurrentPlaces = state.currentPlaces.filter((item) => {
			console.log(item);
			return item._id != action.paylod})
		console.log(action, state.currentPlaces, newCurrentPlaces)
		return {...state, currentPlaces: newCurrentPlaces}
	}
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
