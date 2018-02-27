import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect, NavLink, Link } from 'react-router-dom'
import './App.css';
import Auth from './AuthAdapter'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

class App extends Component {
  state = {
    user: '',
    userIsLoggedIn: false
  }

  render() {
    return (
      <div className="App">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/login' component={Login} />
      </div>
    );
  }
}

export default App;
