import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/user'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Email: </label><br />
        <input type="email" name="email" onChange={this.handleInputChange} /><br />
        <label>Password: </label><br />
        <input type="password" name="password" onChange={this.handleInputChange} /><br />
        <input type="submit" />
        </form>
        <p>Dont have an account? <Link to="/signup">Sign up</Link> here.</p>
      </div>
    )
  }
}

export default connect(null, { loginUser })(Login)
