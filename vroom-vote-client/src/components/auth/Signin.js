import React from 'react'
import { Link } from 'react-router-dom'

class Signin extends React.Component {
  state = {
    email: '',
    password: ''
  }
  
  render() {
    return (
      <div>
        <form>
        <label>Email: </label><br />
        <input type="text" name="email" /><br />
        <label>Password: </label><br />
        <input type="password" name="password" /><br />
        <input type="submit" />
        </form>
        <p>Dont have an account? <Link to="/signup">Sign up</Link> here.</p>
      </div>
    )
  }
}

export default Signin