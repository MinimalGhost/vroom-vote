import React from 'react'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router'
import CarpoolAdapter from '../adapters/CarpoolAdapter'
import { getDriverCarpool } from '../actions'
import { bindActionCreators } from 'redux'
import DriverMap from './DriverMap'
import RiderList from './RiderList'
import { connect } from 'react-redux'

class DriverDashboard extends React.Component {

  componentDidMount = () => {

    if(this.props.auth.user) {
      CarpoolAdapter.getMyCarpool()
      .then(this.props.getRiderCarpool)
    }
  }

  render() {
    return (
      <div>
        { !this.props.auth.isLoggedIn ?
          <div>
            <div>Home</div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        :
          <div>
            <h3>Welcome, Driver {this.props.auth.user.username}</h3>
            <p>Address: {this.props.auth.user.address}</p>
            <p>City/Town: {this.props.auth.user.locale}</p>
            <p>State: {this.props.auth.user._state}</p>
            <p>District: {this.props.auth.user.district}</p>
            <p>Charity: <a target="_blank" href={this.props.auth.user.charity}>{this.props.auth.user.charity}</a></p>
            <p>Open Seats: {this.props.auth.user.seats - this.props.auth.user.carpools[0].users.length - 1}/{this.props.auth.user.seats}</p>
            <DriverMap />
            <RiderList />
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
   carpoolsReducer: {
     driverCarpool: state.carpoolsReducer.driverCarpool
   }
 }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getDriverCarpool: getDriverCarpool
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverDashboard)
