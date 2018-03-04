import React from 'react'
import DriverList from './DriverList'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router'
import DistrictAdapter from '../adapters/DistrictAdapter'
import { getDistrictDrivers, setMyDriver } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class RiderDashboard extends React.Component {

  componentWillMount = () => {
    if(this.props.auth.user) {
      let haveDriver = DistrictAdapter.getMyDriver()
      .then(this.props.setMyDriver)

      if (!haveDriver) {
        DistrictAdapter.getRiderData()
        .then(this.props.getDistrictDrivers)
      }
    }
  }



  selectDriver = (e, driver) => {
    console.log(driver.id);
    DistrictAdapter.joinCarpool(driver.id)
    .then(this.props.setMyDriver)
  }

  render() {

    return (
      <div>
        {
          !this.props.auth.isLoggedIn ?
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        :
          <div>
            <h3>Welcome, Rider {this.props.auth.user.username}</h3>
            <p>Address: {this.props.auth.user.address}</p>
            <p>City/Town: {this.props.auth.user.locale}</p>
            <p>State: {this.props.auth.user._state}</p>
            <p>District: {this.props.auth.user.district}</p>
            {
              this.props.driversReducer.myDriver ?
              <p>You are riding with {this.props.driversReducer.myDriver.username}</p>
              :
              <DriverList selectDriver={this.selectDriver}/>
            }
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
   auth: {
     isLoggedIn: state.auth.isLoggedIn,
     user: state.auth.user
   },
   driversReducer: {
     drivers: state.driversReducer.drivers,
     myDriver: state.driversReducer.myDriver
   }
 }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getDistrictDrivers: getDistrictDrivers,
    setMyDriver: setMyDriver
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiderDashboard)
