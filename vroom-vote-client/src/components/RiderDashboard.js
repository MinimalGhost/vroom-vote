import React from 'react'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router'
import DistrictAdapter from '../adapters/DistrictAdapter'
import { getDistrictDrivers } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class RiderDashboard extends React.Component {

  componentWillMount = () => {
    if(this.props.auth.user) {
      DistrictAdapter.getDistrictDrivers()
      .then(this.props.getDistrictDrivers)
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
            <h3>Welcome, Rider {this.props.auth.user.username}</h3>
            <p>Address: {this.props.auth.user.address}</p>
            <p>City/Town: {this.props.auth.user.locale}</p>
            <p>State: {this.props.auth.user._state}</p>
            <p>District: {this.props.auth.user.district}</p>
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
   drivers: state.drivers.drivers
 }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getDistrictDrivers: getDistrictDrivers
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiderDashboard)
