import React from 'react'

const RiderItem = (props) => {
  return (
    <div>
      <p>Name: {props.user.username}</p>
      <p>Email: {props.user.email}</p>
      <p>Address: {props.user.address} - {props.user.locale}, {props.user._state}</p>
      <p></p>
    </div>
  )
}

export default RiderItem
