export function login(obj,dispatch) {
	let data = JSON.stringify(obj);
	console.log('sending: ',data);
	console.log(obj.username,obj.password,btoa(obj.username+":"+obj.password));
	return fetch('http://localhost:3000/api/auth/login',
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Basic "+btoa(obj.username+":"+obj.password)
		},
		body: data
	})
	.then(res => {console.log('res:',res); return false})
	// .then(obj => {
	// 	console.log("received: ", obj);
	// 	// dispatch(fetchAddServiceSuccess(obj));
	// });
}
function loginComplete(obj){
	console.log('completed:',obj);
	return { type: 'LOGIN_USER', paylod:obj };
}


/*
export const ADD_SERVICE = "ADD_SERVICE";
export const addService = (service, price, vetId, dispatch) => {
	var d = { service, price, vetId };
	d = JSON.stringify(d);
	console.log("D: ", d);
	return fetch(`${API_BASE_URL}/vets/${vetId}/services`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: d
	})
		.then(res => res.json())
		.then(obj => {
			console.log("OBJ2: ", obj.servicesRef);
			dispatch(fetchAddServiceSuccess(obj));
		});
};

export const fetchAddServiceSuccess = obj => ({
	type: ADD_SERVICE,
	payload: obj
});
*/
