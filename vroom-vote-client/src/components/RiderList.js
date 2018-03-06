import React from 'react'
import RiderItem from './RiderItem'
import { connect } from 'react-redux'

const RiderList = (props) => {
    let myRiders = props.auth.user.carpools[0].users.map(user => <div>{user.username}</div>)
    return (
      <div>
        <h4>Here are your riders</h4>
        {myRiders}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
   auth: {
     user: state.auth.user
   }
  }
}

export default connect(mapStateToProps)(RiderList)
