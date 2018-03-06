import React from 'react'

const DriverItem = (props) => {
  return (
    <div>
      <p>Name: {props.username}</p>
      <button onClick={e => props.selectDriver(e, props)}>Select Driver</button>
    </div>
  )
}

export default DriverItem
