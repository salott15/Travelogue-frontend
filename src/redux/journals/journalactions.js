export function addJournal(obj,dispatch) {
	let data = JSON.stringify(obj);
	console.log(data);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/journals/' + localStorage.getItem("uid"),
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(obj => {
			return dispatch(addJournalComplete(obj),dispatch);
	});
};

function addJournalComplete(obj){
	console.log('completed:',obj);
	return { type: 'ADD_JOURNAL', paylod:obj };
};

export function getUserJournals(dispatch) {
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/journals/' + localStorage.getItem("uid"),
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
	})
	.then(obj => {
		return obj.json()}).then( obj => {
		console.log(obj)
			return dispatch({ type: 'GET_JOURNALS', paylod:obj });
	});
};

export function getUserJournalsByState(dispatch) {
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/journals/' + localStorage.getItem("uid") + "/" + localStorage.getItem("state"),
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
	})
	.then(obj => {
		return obj.json()}).then( obj => {
		console.log(obj)
			return dispatch({ type: 'GET_JOURNALS_BY_STATE', paylod:obj });
	});
};

/*export function updateJournal(obj,dispatch) {
	let data = JSON.stringify(obj);
	console.log(data);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/journals/' + localStorage.getItem("jid"),
	{
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(obj => {
			return dispatch(updateJournalComplete(obj),dispatch);
	});
};

function updateJournalComplete(obj){
	console.log('completed:',obj);
	return { type: 'UPDATE_JOURNAL', paylod:obj };
};*/

export function deleteJournal(jid, dispatch) {
	return fetch('http://localhost:3001/journals/' + jid,
	{
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		}
	})
	.then(obj => {
			return dispatch({ type: 'DELETE_JOURNAL', paylod:obj });
	});
};