import React from 'react'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router'
import RiderList from './RiderList'
import { connect } from 'react-redux'

class DriverDashboard extends React.Component {

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
            <p>Open Seats: 0/{this.props.auth.user.seats}</p>
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
   }
 }
}

export default connect(mapStateToProps)(DriverDashboard)
