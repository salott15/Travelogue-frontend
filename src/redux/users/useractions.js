import {API_BASE_URL} from '../../config'

export function newUser(obj,dispatch) {
	let data = JSON.stringify(obj);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch(`${API_BASE_URL}/users`,
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			//"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(response => {
		return response.json()
	})
	.then(response => {
		if( response.message )	{
			return dispatch(registerUserError(response.message))
		}
		else{
			window.location = "/login"
		}
	})
};

function registerUserError(error){
	console.log(error)
	return {
		type: 'USER_REGISTER_ERROR',
		error
	}
}

export function login(obj,dispatch) {
	let data = JSON.stringify(obj);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch(`${API_BASE_URL}/api/auth/login`,
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(response => response.json())
	.then(data => {
		localStorage.setItem('token',data.token);
		localStorage.setItem('email',data.email);
		localStorage.setItem('uid',data.uid);
		dispatch(loginComplete(data),dispatch);
		window.location = "/usermain"
	});
};

export function loginComplete(data){
	return {
		type: 'LOGIN_USER',
		paylod:data
	};
}

export function testAuth(dispatch)
{
	return fetch('http://localhost:3000/places/59bcbf567af5170b97ca7996',
	{
		method: "GET",
		headers: {
			"Authorization": "Bearer " + localStorage.getItem('token')
		},
	})
	.then(res => res.json())
	.then(obj => {
		console.log('get placesx',obj);
		//dispatch(loginComplete(obj),dispatch);
	});
}

export function getUser(dispatch) {
	const id = localStorage.getItem("uid");
	return fetch(`${API_BASE_URL}/users/${id}`,
	{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
	.then(obj => {
		console.log(obj)
		return obj.json()}).then( obj => {
		console.log(obj)
			return dispatch({ type: 'GET_USER', paylod:obj });
	});
};
