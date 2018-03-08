import React from 'react'
import RiderItem from './RiderItem'
import { connect } from 'react-redux'

const RiderList = (props) => {
    let myRiders = props.auth.user.carpools[0].users.map(user => <RiderItem key={user.id} user={user} />)
    myRiders.shift()
    console.log(myRiders)
    return (
      <div>
        <h4>People riding with you</h4>
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
