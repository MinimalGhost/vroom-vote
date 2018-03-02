import React from 'react'
import DriverItem from './DriverItem'
import { connect } from 'react-redux'

const DriverList = (props) => {
    let districtDrivers = props.drivers.map(driver => <DriverItem key={driver.id} selectDriver={props.selectDriver} {...driver} />)

    return (
      <div>
        <h4>Here are available drivers in your district</h4>
        {districtDrivers}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
   drivers: state.driversReducer.drivers
  }
}

export default connect(mapStateToProps)(DriverList)
