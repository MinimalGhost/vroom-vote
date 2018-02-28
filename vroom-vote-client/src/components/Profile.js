import React from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {
  return (
    <h3>Welcome, {props.username}</h3>
  )
}

const mapStateToProps = (state) => ({ username: state.auth.username })

export default connect(mapStateToProps)(Profile)
