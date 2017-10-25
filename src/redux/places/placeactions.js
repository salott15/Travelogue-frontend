export function addPlace(obj,dispatch) {
	let data = JSON.stringify(obj);
	console.log(data);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/places/' + localStorage.getItem("uid"),
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(obj => {
			return dispatch(addPlaceComplete(obj),dispatch);
	});
};

function addPlaceComplete(obj){
	console.log('completed:',obj);
	return { type: 'ADD_PLACE', paylod:obj };
}

export function getUserPlaces(dispatch) {
	return fetch('http://localhost:3001/places/' + localStorage.getItem("uid"),
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		}
	})
	.then(obj => {
			return dispatch(getPlacesComplete(obj));
	});
};

function getPlacesComplete(obj){
	console.log('completed:',obj);
	return { type: 'GET_PLACES', paylod:obj };
};

export function getUserPlacesByState(dispatch) {
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/places/' + localStorage.getItem("uid") + "/" + localStorage.getItem("state"),
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer "+localStorage.getItem("token")
		},
	})
	.then(obj => {
		console.log(obj)
			return dispatch({ type: 'GET_PLACES_BY_STATE', paylod:obj });
	});
};

/*export function updatePlace(obj,dispatch) {
	let data = JSON.stringify(obj);
	console.log(data);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/places/' + localStorage.getItem("pid"),
	{
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(obj => {
			return dispatch(updatePlaceComplete(obj),dispatch);
	});
};

function updatePlaceComplete(obj){
	console.log('completed:',obj);
	return { type: 'UPDATE_PLACE', paylod:obj };
};*/

export function deletePlace(pid, dispatch) {
	return fetch('http://localhost:3001/places/' + pid,
	{
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		}
	})
	.then(obj => {
			return dispatch({ type: 'DELETE_PLACE', paylod:pid });
	});
};