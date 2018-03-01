import React from 'react'
import { connect } from 'react-redux'

const DriverItem = (props) => {
  return (
    <div>
      <p>{props.username}</p>
    </div>
  )
}

export default DriverItem
