import React from 'react'
import DriverItem from './DriverItem'
import { connect } from 'react-redux'

const DriverList = (props) => {
    let districtDrivers = props.drivers.map(driver => <DriverItem {...driver} />
)
    return (
      <div>
        {districtDrivers}
      </div>
    )
}

const mapStateToProps = (state) => {
  console.log(state.driversReducer.drivers);
 return {
   drivers: state.driversReducer.drivers
 }
}

export default connect(mapStateToProps)(DriverList)
