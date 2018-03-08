import React from 'react'
import DriverList from './DriverList'
import RiderMap from './RiderMap'
import { Link } from 'react-router-dom'
import CarpoolAdapter from '../adapters/CarpoolAdapter'
import { joinCarpool } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Grid, Segment, Divider, Header } from 'semantic-ui-react'


class RiderDashboard extends React.Component {

  selectDriver = (e, driver) => {
    console.log(driver.id);
    CarpoolAdapter.joinCarpool(driver.id)
    .then(this.props.joinCarpool)
  }

  render() {
    return (
      <div>
        {
          !this.props.auth.isLoggedIn ?
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        :
          <Grid textAlign='center'
           style={{ height: '100%'}}
           verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 850 }}>
            <Grid>
            <Grid.Column>
              <Header as='h3' color='teal' textAlign='center'>Welcome, Rider {this.props.auth.username}</Header>
              <p>Address: {this.props.auth.address}</p>
              <p>City/Town: {this.props.auth.locale}</p>
              <p>State: {this.props.auth._state}</p>
              <p>District: {this.props.auth.district}</p>
            </Grid.Column>
            </Grid>
              {
                this.props.auth.carpools.length ?
                <div>
                  <h3>You are riding with {this.props.auth.carpools[0].users[0].username}</h3>
                  <p>Email: {this.props.auth.carpools[0].users[0].email}</p>
                  <p>Charity: <a href={this.props.auth.carpools[0].users[0].charity_url}>{this.props.auth.carpools[0].users[0].charity}</a></p>
                </div>
                :
                <Grid columns={2}>
                  <Grid.Column>
                    <DriverList selectDriver={this.selectDriver}/>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment raised>
                      <RiderMap />
                    </Segment>
                  </Grid.Column>
                </Grid>
              }
            </Grid.Column>
          </Grid>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
   auth: {
     isLoggedIn: state.auth.isLoggedIn,
     ...state.auth.user
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
    joinCarpool: joinCarpool
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiderDashboard)
