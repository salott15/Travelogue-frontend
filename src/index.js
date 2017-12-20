import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './nav-bar';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <NavBar />
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();
