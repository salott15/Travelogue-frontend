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
	.then(res => res.json())
	.then(obj => {
		dispatch(loginComplete(obj));
	});
}
function loginComplete(obj){
	console.log('completed:',obj);
	return { type: 'LOGIN_USER', paylod:obj };
}
