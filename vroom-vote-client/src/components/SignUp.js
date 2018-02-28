import React from 'react'
import UserAdapter from '../adapters/UserAdapter'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    password_confirmation: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup = (e) => {
    e.preventDefault();
    UserAdapter.createUser(this.state)
      .then(res => res.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignup}>
          <label>Username: </label><br />
          <input
            type="text"
            name="username" onChange={this.handleInputChange} value={this.state.username} /><br />
          <label>Password: </label><br />
          <input
            type="password"
            name="password"  onChange={this.handleInputChange} value={this.state.password} /><br />
          <label>Confirm password: </label><br />
          {
            (this.state.password !== this.state.password_confirmation && this.state.password_confirmation.length > 0)
            ? <p>Passwords Must Match</p> : null
          }
          <input
            type="password"
            name="password_confirmation" onChange={this.handleInputChange} value={this.state.password_confirmation} /><br />
          <input type="submit" />
        </form>
        <p>Already have an account? <Link to="/login">Login</Link> here.</p>
      </div>
    )
  }
}

export default SignUp
