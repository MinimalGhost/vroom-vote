import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ usersReducer })

const store = createStore(rootReducer, applylMiddleware(thunk))

console.log('Redux store state: ', store.getState());

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root')
);
registerServiceWorker();
