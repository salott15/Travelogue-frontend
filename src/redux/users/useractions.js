export function newUser(obj,dispatch) {
	let data = JSON.stringify(obj);
	console.log(data);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/users/',
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

function addUserComplete(obj){
	console.log('completed:',obj);
	return { type: 'ADD_USER', paylod:obj };
};

export function login(obj,dispatch) {
	let data = JSON.stringify(obj);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3001/api/auth/login',
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(obj => {
		fetch('http://localhost:3001/api/auth/authtoken',
		{
			method: "GET"
		})
		.then(res => res.json())
		.then(obj =>{
			console.log('OBJOBJ:',obj);
			localStorage.setItem('token',obj.tkn);
			localStorage.setItem('uid', obj.uid);
			return dispatch(loginComplete(obj),dispatch);
		})
	});
};

function loginComplete(obj){
	console.log('completed:',obj);
	return { type: 'LOGIN_USER', paylod:obj };
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
	return fetch('http://localhost:3001/users/' + localStorage.getItem("uid"),
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