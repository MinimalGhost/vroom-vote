import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  }
  
  render() {
    return (
      <div>
        <form>
          <label>Email: </label><br />
          <input type="text" name="email" /><br />
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

export default Signup