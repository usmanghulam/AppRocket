import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import Routes from './routes';
import Reducers from './Redux/reducers';

const store = createStore(Reducers,
	composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
	  <Router>
		  <Routes />
	  </Router>
  </Provider>
, document.getElementById('root'));
