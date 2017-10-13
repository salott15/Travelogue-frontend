import { combineReducers } from 'redux-immutable';

const initialState = {
	name:'notLoggedIn Dude',
	loggedIn: false
}

function users(state = initialState, action){
	switch (action.type)
	{
		case 'LOGIN_USER' :
		return true;
	}
}

function getUser(state = initialState, action) {
	if(action.type === "GET_USER"){
	return {...state, currentUser: action.paylod}}
return state
}

function userReducer(state = initialState, action)
{
  return {
		loggedIn:
		users(state.loggedIn,action)
  };
}

export default userReducer;
