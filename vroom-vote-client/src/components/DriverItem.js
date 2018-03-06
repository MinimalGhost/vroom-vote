import React from 'react'

const DriverItem = (props) => {
  return (
    <div>
      <p>Name: {props.username}</p>
      <p>Charity Sponsor: <a target="_blank" href={props.charity}>{props.charity}</a></p>
      <button onClick={e => props.selectDriver(e, props)}>Select Driver</button>
    </div>
  )
}

export default DriverItem
