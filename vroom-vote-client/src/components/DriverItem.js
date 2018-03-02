import React from 'react'

const DriverItem = (props) => {
  return (
    <div>
      <p>Name: {props.username}</p>
      <p>Open Seats: 0/{props.seats}</p>
      <button onClick={e => props.selectDriver(e, props)}>Select Driver</button>
    </div>
  )
}

export default DriverItem
