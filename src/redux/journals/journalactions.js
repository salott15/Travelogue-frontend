export function addJournal(obj,dispatch) {
	let data = JSON.stringify(obj);
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
			window.location.href="/journals"
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
	.then(response => {
		return response.json()
	})
	.then(journals => {
			return dispatch({ type: 'GET_JOURNALS', paylod:journals });
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
		return obj.json()})
	.then( obj => {
		console.log(obj)
			return dispatch({ type: 'GET_JOURNALS_BY_STATE', paylod:obj });
	});
};

export function deleteJournal(jid, dispatch) {
    return fetch('http://localhost:3001/journals/' + jid,
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            //"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
        }
    })
    .then(response => {
    	console.log(response)
      return response.json()
    })
    .then(data => {
      return console.log(data)
    })
};
