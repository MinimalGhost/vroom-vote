import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import './App.css';
import Auth from './AuthAdapter'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Home from './components/Home'

class App extends Component {
  state = {
    user: '',
    userIsLoggedIn: false
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
