import React from 'react'
import AuthAdapter from '../adapters/AuthAdapter'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logIn, logOut } from '../actions'


class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    AuthAdapter.login({
      username: this.state.username,
      password: this.state.password
    }).then(user  => {
      if(!user.error) {
        this.props.logIn(user)
        localStorage.setItem('jwt', user.jwt)
      }
    })
  }

  render() {
    return(
      <div>
        {!this.props.auth.isLoggedIn ?
          <div>
            <Link to="/signup">Sign Up</Link>

            <form onSubmit={this.handleLoginSubmit}>
              <label>Username: </label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
              />
              <label>Password: </label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
              />
              <input type="submit" />
            </form>
          </div>
        :
          <Redirect to="/profile"/>
        }
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
