import { combineReducers } from 'redux-immutable';
import userReducer from './users/userreducer.js';
import journalReducer from './journals/journalreducer.js';
//import {travelogueReducer} from ''

export default function createReducer(asyncReducers)
{
  return combineReducers({
    user: userReducer,
    journal: journalReducer,
    ...asyncReducers,
  });
}
