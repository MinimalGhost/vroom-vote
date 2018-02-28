import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../../actions/user'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signupUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <div>
        <form>
          <label>Username: </label><br />
          <input type="text" name="username" /><br />
          <label>Email: </label><br />
          <input type="email" name="email" /><br />
          <label>Password: </label><br />
          <input type="password" name="password" /><br />
          <label>Confirm password: </label><br />
          <input type="password" name="password_confirmation" /><br />
          <input type="submit" />
        </form>
        <p>Already have an account? <Link to="/signin">Sign in</Link> here.</p>
      </div>
    )
  }
}

export default connect(null, { signupUser })(Signup)
