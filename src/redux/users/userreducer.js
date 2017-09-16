import { combineReducers } from 'redux-immutable';

const initialState = {
	name:'notLoggedIn Dude',
	loggedIn: false
}

//Get State to be updated.

function users(state = initialState, action){
	switch (action.type)
	{
		case 'LOGIN_USER' :
		return true;
	}
}

function userReducer(state = initialState, action)
{
  return {
		loggedIn:
		users(state.loggedIn,action)
  };
}

export default userReducer;
