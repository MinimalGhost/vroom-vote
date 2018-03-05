import React from 'react'
import DriverList from './DriverList'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router'
import CarpoolAdapter from '../adapters/CarpoolAdapter'
import { getRiderCarpool } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class RiderDashboard extends React.Component {

  selectDriver = (e, driver) => {
    console.log(driver.id);
    CarpoolAdapter.joinCarpool(driver.id)
    .then(this.props.getRiderCarpool)
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
          <div>
            <h3>Welcome, Rider {this.props.auth.user.username}</h3>
            <p>Address: {this.props.auth.user.address}</p>
            <p>City/Town: {this.props.auth.user.locale}</p>
            <p>State: {this.props.auth.user._state}</p>
            <p>District: {this.props.auth.user.district}</p>
            {
              !this.props.carpoolsReducer.riderCarpool == null ?
              <p>You are riding with {this.props.carpoolsReducer.riderCarpool.driver.username}</p>
              :
              <DriverList selectDriver={this.selectDriver}/>
            }
          </div>
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
    getRiderCarpool: getRiderCarpool
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiderDashboard)
