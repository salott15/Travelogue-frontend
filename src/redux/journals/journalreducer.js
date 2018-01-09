const initialState = {
	lastSessionEntry: "",
	currentJournals: []
}

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
			return journal._id !== action.paylod})

		return {...state, currentJournals: newCurrentJournals}
	}

	return state
}

export default journalReducer;
