import { combineReducers } from 'redux-immutable';

const initialState = { 
	name:'notLoggedIn Dude',  
	loggedIn: false
}

//Get State to be updated. 

function users(state = initialState, action){
	console.log(action)
	switch (action.type)
	{ 
		case 'LOGIN_USER' : 
		return { x:"y"}
	}
}

function userReducer(state = initialState, action){ 
	return combineReducers({
		loggedIn: 
		users(state.loggedIn,action)
	})
}

export function testFetch(obj) { 
	console.log("reducerran")
	return { type: "CREATE_CUSTOM_LOAD", obj }; 
}

export default userReducer;