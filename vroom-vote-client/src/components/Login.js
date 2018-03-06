import React from 'react'
import AuthAdapter from '../adapters/AuthAdapter'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logIn, logOut, getDistrictDrivers, getRiderCarpool } from '../actions'


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
        // this.props.getDistrictDrivers(user.user.drivers)
        // this.props.getRiderCarpool(user.carpool)
        this.props.history.push('/profile')
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
              <label>Username: </label><br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
              />
              <br />
              <label>Password: </label><br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
              />
              <br />
              <input type="submit" />
            </form>
          </div>
        :
          null
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
    },
    driversReducer: state.driversReducer.drivers,
    carpoolsReducer: {
      carpools: state.carpoolsReducer.carpools,
      riderCarpool: state.carpoolsReducer.riderCarpool
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn: logIn,
    logOut: logOut,
    getDistrictDrivers: getDistrictDrivers,
    getRiderCarpool: getRiderCarpool
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
