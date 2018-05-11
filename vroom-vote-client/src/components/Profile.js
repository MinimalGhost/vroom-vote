import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

class Profile extends React.Component {

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
            {
              this.props.auth.user.is_driver ?
              // redirect to driver homepage
              <Redirect to="/driverdash" />
              :
              // redirect to list of drivers in district
              <Redirect to="/riderdash" />
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
   }
 }
}

export default connect(mapStateToProps)(Profile)
