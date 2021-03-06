import React from 'react';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store.js'
// import './index.css';
import App from './App';
// import usersReducer from './reducers/usersReducer'
import registerServiceWorker from './registerServiceWorker';

// const rootReducer = combineReducers({ usersReducer })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))

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
