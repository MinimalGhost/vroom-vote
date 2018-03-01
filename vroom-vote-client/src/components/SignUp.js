import React from 'react'
import UserAdapter from '../adapters/UserAdapter'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  state = {
    username: '',
    address: '',
    locale: '',
    _state: 'AL',
    is_driver: true,
    password: '',
    password_confirmation: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleProfileToggle = (e) => {
    if (e.target.value === 'driver') {
      this.setState({
        is_driver: true
      })
    } else if (e.target.value === 'rider') {
      this.setState({
        is_driver: false
      })
    }
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
            name="username" onChange={this.handleInputChange} value={this.state.username} />
            <br />
            <label>Address: </label><br />
            <input
              type="text"
              name="address" onChange={this.handleInputChange} value={this.state.address}
            />
            <br />
            <label>City/Town: </label><br />
            <input
              type="text"
              name="locale" onChange={this.handleInputChange} value={this.state.locale}
            />
            <br />
            <label>state: </label><br />
            <select
              name="_state" onChange={this.handleInputChange} value={this.state._state}>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
            <br />
            <label>Profile type: </label><br />
            <select
              name="is_driver"
              onChange={this.handleProfileToggle}>
              <option value='driver'>Driver</option>
              <option value='rider'>Rider</option>
            </select>
            <br />
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