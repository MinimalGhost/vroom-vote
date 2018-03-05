import React from 'react'
import RiderItem from './RiderItem'
import { connect } from 'react-redux'

const RiderList = (props) => {

    return (
      <div>
        <h4>Here are your riders</h4>
        <p>Rider names go here</p>
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
