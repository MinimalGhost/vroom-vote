import React from 'react'
import GoogleMapReact from 'google-map-react'
import config from '../config'
import HomeMarker from './HomeMarker'
import DriverMarker from './DriverMarker'
import { connect } from 'react-redux'


class RiderMap extends React.Component {

  // static defaultProps = {
  //   center: { lat: 40.7215233, lng: -73.8604063 },
  //   zoom: 13
  // };

  render() {
    let userCenter = {lat: parseFloat(this.props.auth.latitude), lng: parseFloat(this.props.auth.longitude)}
    let userZoom = 10
    let myDriverMarkers = this.props.driversReducer.drivers.map(driver =>
      <DriverMarker
        lat={driver.latitude}
        lng={driver.longitude}
        key={driver.id}
        driver={driver}
      />)


    return (
      <div className="google-map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: `${config.MAPS_KEY}`}}
        center={userCenter}
        zoom={userZoom} >
          <HomeMarker lat={this.props.auth.latitude} lng={this.props.auth.longitude} />

          {myDriverMarkers}

        </GoogleMapReact>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    auth: {
      isLoggedIn: state.auth.isLoggedIn,
      ...state.auth.user
    },
    driversReducer: {
      drivers: state.driversReducer.drivers
    },
    carpoolsReducer: {
      carpools: state.carpoolsReducer.carpools,
      riderCarpool: state.carpoolsReducer.riderCarpool
    }
  }
 }

export default connect(mapStateToProps)(RiderMap)
