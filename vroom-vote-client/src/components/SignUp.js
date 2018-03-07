import React from 'react'
import UserAdapter from '../adapters/UserAdapter'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logIn, logOut, getDistrictDrivers } from '../actions'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class SignUp extends React.Component {
  state = {
    username: '',
    email: '',
    address: '',
    locale: '',
    _state: 'AL',
    is_driver: true,
    seats: '',
    charity: '',
    charity_url: '',
    avatarPhoto: [],
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
      .then(user  => {
        if(!user.error) {
          this.props.logIn(user)
          localStorage.setItem('jwt', user.jwt)
          // this.props.getDistrictDrivers(user.drivers)
          // this.props.getRiderCarpool(user.carpool)
          this.props.history.push('/profile')
        }
      })
  }

  render() {
    return (
      <div className='signup-form'>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
        {!this.props.auth.isLoggedIn ?
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 650 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/vv.png' />
                {' '}Sign-Up for an account
              </Header>
              <Form class="ui form" size='medium' onSubmit={this.handleSignup}>
                <Segment>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Full Name"
                    type="text"
                    name="username" onChange={this.handleInputChange} value={this.state.username} />
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                    />
                    <Form.Input
                      fluid
                      icon="marker"
                      iconPosition="left"
                      placeholder="Address"
                      type="text"
                      name="address"
                      onChange={this.handleInputChange}
                      value={this.state.address}
                    />
                    <Form.Input
                      fluid
                      icon="marker"
                      iconPosition="left"
                      placeholder="City/Town"
                      type="text"
                      name="locale"
                      onChange={this.handleInputChange}
                      value={this.state.locale}
                    />
                    <label>State: </label><br />
                    <select class="ui fluid dropdown"
                      fluid
                      name="_state"
                      onChange={this.handleInputChange}
                      value={this.state._state}
                    >
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
                    <label>Profile Type: </label><br />
                    <select class="ui fluid dropdown"
                      name="is_driver"
                      onChange={this.handleProfileToggle}>
                      <option value='driver'>Driver</option>
                      <option value='rider'>Rider</option>
                    </select>
                    <br />
                  {this.state.is_driver === true ?
                    <div>
                      <Form.Input
                        fluid
                        icon="users"
                        iconPosition="left"
                        placeholder="Seats"
                        type="number"
                        name="seats"
                        onChange={this.handleInputChange}
                        value={this.state.seats}
                      />
                      <Form.Input
                        fluid
                        placeholder="Charity"
                        type="text"
                        name="charity"
                        onChange={this.handleInputChange}
                        value={this.state.charity}
                      />
                      <Form.Input
                        fluid
                        placeholder="Charity website URL"
                        type="text"
                        name="charity_url"
                        onChange={this.handleInputChange}
                        value={this.state.charity_url}
                      />
                      <br />
                    </div>
                    :
                      null
                  }
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"  onChange={this.handleInputChange} value={this.state.password} />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm password"
                    type="password"
                    name="password_confirmation" onChange={this.handleInputChange} value={this.state.password_confirmation} />
                    {
                      (this.state.password !== this.state.password_confirmation && this.state.password_confirmation.length > 0)
                      ? <p>Passwords Must Match</p> : null
                    }
                  <Button color='teal' fluid size='medium' type="submit">Sign Up</Button>
                </Segment>
              </Form>
              <Message>
                Already have an account? <Link to="/login">Login</Link> here.
              </Message>
            </Grid.Column>
          </Grid>
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
    driversReducer: {
      drivers: state.driversReducer.drivers
    },
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
    getDistrictDrivers: getDistrictDrivers
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
