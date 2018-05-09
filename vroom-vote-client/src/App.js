import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logIn, logOut } from './actions'
import './App.css';
import AuthAdapter from './adapters/AuthAdapter'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import RiderDashboard from './components/RiderDashboard'
import DriverDashboard from './components/DriverDashboard'
import { Header, Image } from 'semantic-ui-react'

class App extends Component {

  componentWillMount() {
  if (localStorage.getItem('jwt')) {
    AuthAdapter.current_user()
      .then(user => {
        if (!user.error) {
          this.props.logIn(user)
        }
      })
    }
  }

  logout = () => {
    localStorage.removeItem('jwt')
    this.props.logOut()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        {this.props.auth.isLoggedIn ?
          <div className="ui menu">
            <div className="item">
            <Header className='vroom' as='h2' color='teal' textAlign='center'>
              <Image src='/vv.png' />
              {' '}<span className="font1">VROOM</span><span className="font2">vote</span>
            </Header>
            </div>
            <div className="right menu">
              <div className="item">
                 <div className="ui teal button" onClick={this.logout}>Log Out</div>
              </div>
            </div>
          </div>

 : null }
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/riderdash' component={RiderDashboard} />
          <Route exact path='/driverdash' component={DriverDashboard} />
          <Route path="*" component={Profile} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: {
      isLoggedIn: state.auth.isLoggedIn,
      user: state.auth.user
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn: logIn,
    logOut: logOut
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
