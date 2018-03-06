import React from 'react'
import DriverList from './DriverList'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router'
import CarpoolAdapter from '../adapters/CarpoolAdapter'
import { getRiderCarpool, joinCarpool } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


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
          <div>
            <h3>Welcome, Rider {this.props.auth.username}</h3>
            <p>Address: {this.props.auth.address}</p>
            <p>City/Town: {this.props.auth.locale}</p>
            <p>State: {this.props.auth._state}</p>
            <p>District: {this.props.auth.district}</p>
            {
              this.props.auth.carpools.length ?
              <p>You are riding with {this.props.auth.carpools[0].users[0].username}</p>
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
