const initialState = {
	lastSessionEntry: "",
	currentPlaces: []
}

function placeReducer(state = initialState, action)
{
 if(action.type === "GET_PLACES_BY_STATE"){
	return {...state, currentPlaces: action.paylod}}
	else if(action.type === "GET_PLACES"){
		let getPlacesNew = {...state, currentPlaces: action.paylod};
		return getPlacesNew;
	}
	else if (action.type === "DELETE_PLACE"){
		var newCurrentPlaces = state.currentPlaces.filter((item) => {
			return item._id !== action.paylod})
		return {...state, currentPlaces: newCurrentPlaces}
	}
return state
}

export default placeReducer;
