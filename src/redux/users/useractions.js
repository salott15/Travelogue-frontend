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
	.then(res => res.json())
	.then(obj => {
		//getAuthToken(data,dispatch);
		dispatch(loginComplete(obj),dispatch);
		// setTimeout(function(){ window.location = '/usermain' },200);
	});
}
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
			"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjU5YmNiZjU2N2FmNTE3MGI5N2NhNzk5NiIsImVtYWlsIjoiYUBiLmMiLCJwYXNzd29yZCI6IiQyYSQxMCRrVTVZeWJZWVB6bG9hZlJGZkU0ZTVlb1NwZ1BNd242RE1RVlFvbExFODdEUXAwei9UNy81aSIsImZpcnN0bmFtZSI6ImJvYiIsImxhc3RuYW1lIjoiam9uZXMiLCJ1c2VybmFtZSI6ImFAYi5jIiwiX192IjowLCJkYXRlQWRkZWQiOiIyMDE3LTA5LTIxVDIzOjQwOjE2LjMzMloiLCJwbGFjZXNSZWYiOltdLCJqb3VybmFsc1JlZiI6W119LCJpYXQiOjE1MDYwMzcyMTYsImV4cCI6MTUwNjY0MjAxNiwic3ViIjoiYUBiLmMifQ.TS3pVSTQQSH4_lg5VCht9JELwrhke7zjpCCMRwFC8hg"
		},
	})
	.then(res => res.json())
	.then(obj => {
		console.log('get places',obj);
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
