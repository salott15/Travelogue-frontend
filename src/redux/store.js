import { createStore, applyMiddleware, compose } from 'redux'; 
import { routerMiddleware } from 'react-router-redux'; 
import createSagaMiddleware from 'redux-saga'; 
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware(); 
export default function configureStore(initialState, history = {}) { 
	const middlewares = [ sagaMiddleware, routerMiddleware(history), ]; 
	// If Redux DevTools Extension is installed use it, otherwise use Redux compose 
	const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE : compose; 
	const enhancers = [ applyMiddleware(...middlewares), ]; 
	const store = createStore( createReducer(), initialState, composeEnhancers(...enhancers) ); 
	//Sagas
	//sagaMiddleware.run(reducerWatcher); 
	// Extensions 
	store.asyncReducers = {}; 
	// Async reducer registry 
	return store; 
}