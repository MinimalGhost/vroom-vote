import React from 'react'
import AuthAdapter from '../adapters/AuthAdapter'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logIn, logOut, getDistrictDrivers } from '../actions'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


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
      <div className='login-form'>
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
            style={{ height: '100%'}}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h1' color='teal' textAlign='center'>
                <Image src='/vv.png' />
                {' '}<span className="font1">VROOM</span><span className="font2">vote</span>
              </Header>
              <Form size='large' onSubmit={this.handleLoginSubmit}>
                <Segment>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Full Name'
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                  />
                  <Button color='teal' fluid size='large' type="submit">Login</Button>
                </Segment>
              </Form>
              <Message>
                No account? <Link to="/signup">Sign Up</Link>
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
    getDistrictDrivers: getDistrictDrivers
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
