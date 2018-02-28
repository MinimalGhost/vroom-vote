import React from 'react'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router'
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
            <h3>Welcome, {this.props.auth.user.username}</h3>
            {
              this.props.auth.user.is_driver ?
              <p>Your profile is set to Driver</p>
              :
              <p>Your profile is set to Rider</p>
            }
            <p>City: {this.props.auth.user.locale}</p>
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
