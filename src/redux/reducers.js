import { combineReducers } from 'redux';
import users from './users/userreducer.js';
import journalReducer from './journals/journalreducer.js';
import placeReducer from './places/placereducers.js';

const rootReducer = combineReducers({
    users,
    journal: journalReducer,
    place: placeReducer,
  });

export default rootReducer;