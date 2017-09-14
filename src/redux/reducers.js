import { combineReducers } from 'redux-immutable';
import userReducer from './users/userreducer.js';
//import {travelogueReducer} from ''

export default function createReducer(asyncReducers) { 
	return combineReducers({ 
		userReducer, ...asyncReducers, 
	}); 
}