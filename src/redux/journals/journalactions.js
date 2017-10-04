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
}