import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './nav-bar';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store'
import { Provider } from 'react-redux';

const StoreInstance = configureStore();

ReactDOM.render(
  <Provider store={StoreInstance}>
      <NavBar />
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();
