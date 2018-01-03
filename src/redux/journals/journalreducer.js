import { combineReducers } from 'redux-immutable';

const initialState = {
	lastSessionEntry: "",
	currentJournals: []
}

// function addSessionEntry(state = initialState, action) {
// 		switch (action.type)
// 	{
// 		case 'ADD_JOURNAL' :
// 		return new Date();
// 		default:
// 		return state;
// 	}
// }

// function getCurrentJournals(state = initialState, action) {
// 	if(action.type === "GET_JOURNALS_BY_STATE"){
// 	return {...state, currentJournals: action.paylod}}
// 	else if(action.type === "GET_JOURNALS"){
// 		console.log(state);
// 		return {...state, currentJournals: action.paylod}
// 	}
// 	else if (action.type === "DELETE_JOURNAL"){
// 		console.log(state.currentJournals);
// 		var newCurrentJournals = state.currentJournals.filter((item) => {
// 			console.log(item);
// 			return item._id != action.paylod})
// 		console.log(action, state.currentJournals, newCurrentJournals)
// 		return {...state, currentJournals: newCurrentJournals.currentJournals}
// 	}
// return state
// }

function journalReducer(state = initialState, action)
{
	if(action.type === "GET_JOURNALS_BY_STATE"){
		return {...state, currentJournals: action.paylod}
	}
	else if(action.type === "GET_JOURNALS"){
		return {...state, currentJournals: action.paylod}
	}
	else if (action.type === "DELETE_JOURNAL"){
		const newCurrentJournals = state.currentJournals.filter(journal => {
			return journal._id != action.paylod})

		return {...state, currentJournals: newCurrentJournals}
	}

	return state
}

export default journalReducer;
