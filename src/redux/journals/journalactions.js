import {API_BASE_URL} from '../../config'

export function addJournal(obj,dispatch) {
	let data = JSON.stringify(obj);
	return fetch(`${API_BASE_URL}/journals/${localStorage.getItem("uid")}`,
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	// .then(response => console.log(response))
	.then(obj => {
			window.location.href="/journals"
	});
};

export function getUserJournals(dispatch) {
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch(`${API_BASE_URL}/journals/${localStorage.getItem("uid")}`,
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
	})
	.then(response => {
		return response.json()
	})
	.then(journals => {
			return dispatch({ type: 'GET_JOURNALS', paylod:journals });
	});
};

export function getUserJournalsByState(dispatch) {
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch(`${API_BASE_URL}/journals/${localStorage.getItem("uid")}/${localStorage.getItem("state")}`,
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
	})
	.then(obj => {
		return obj.json()})
	.then( obj => {
			return dispatch({ type: 'GET_JOURNALS_BY_STATE', paylod:obj });
	});
};

export function deleteJournal(jid, dispatch) {
    return fetch(`${API_BASE_URL}/journals/${jid}`,
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            //"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
        }
    })
    .then(obj => {
        console.log(obj);
            return dispatch({ type: 'DELETE_JOURNAL', paylod:jid });
    });
};
