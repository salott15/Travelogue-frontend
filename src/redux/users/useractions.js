//TODO: Make 'http://localhost:3000' a config variable

export function login(obj,dispatch) {
	let data = JSON.stringify(obj);
	// console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3000/api/auth/login',
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(obj => {
		fetch('http://localhost:3000/api/auth/authtoken',
		{
			method: "GET"
		})
		.then(res => res.json())
		.then(obj =>{
			console.log('OBJOBJ:',obj);
			localStorage.setItem('token',obj.tkn);
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

//
//
// export function getAuthToken(obj,dispatch)
// {
// 	let data = JSON.parse(obj);
// 	return fetch('http://localhost:3000/api/auth/gettoken/'+data.username,{
// 		method:"GET",
// 	})
// 	.then(res => res.json())
// 	.then(obj => {
// 		console.log('obj from getAuthToken:',obj);
// 		dispatch({ type:'SET_USER_TOKEN', payload:obj});
// 		//dispatch(loginComplete(obj),dispatch);
// 	});
// }
