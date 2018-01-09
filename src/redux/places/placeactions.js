import {API_BASE_URL} from '../../config'

export function addPlace(obj,dispatch) {
	let data = JSON.stringify(obj);
	console.log(data);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch(`${API_BASE_URL}/localStorage.getItem("uid")`,
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(obj => {
			//return dispatch(addPlaceComplete(obj),dispatch);
			window.location.href="/places"
	});
};

export function getUserPlaces(dispatch) {
	return fetch(`${API_BASE_URL}/localStorage.getItem("uid")`,
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		}
	})
	.then(response => {
		return response.json()
	})
	.then(data => dispatch(getPlacesComplete(data.placesRef)) )
};

function getPlacesComplete(places){
	return { type: 'GET_PLACES', paylod:places };
};

export function getUserPlacesByState(dispatch) {
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch(`${API_BASE_URL}/localStorage.getItem("uid")/localStorage.getItem("state")`,
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer "+localStorage.getItem("token")
		},
	})
	.then(response => {
			return response.json()
	})
	.then( (data) => dispatch({ type: 'GET_PLACES_BY_STATE', paylod:data }));
};

export function deletePlace(pid, dispatch) {
	return fetch(`${API_BASE_URL}/localStorage.getItem("uid")` + pid,
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
