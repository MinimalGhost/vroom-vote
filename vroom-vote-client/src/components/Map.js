import React from 'react'
import GoogleMapReact from 'google-map-react'
import config from '../config'
import HomeMarker from './HomeMarker'
import Marker from './Marker'
import { connect } from 'react-redux'


class Map extends React.Component {
  static defaultProps = {
    center: {lat: 40.731134, lng: -73.984099},
    zoom: 12
  };

  render() {
    let myRiderMarkers = this.props.auth.user.carpools[0].users.map(rider =>
      <Marker
        lat={rider.latitude}
        lng={rider.longitude}
        key={rider.id}
        rider={rider}
      />)
    myRiderMarkers.shift()

    return (
      <div className="google-map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: `${config.MAPS_KEY}`}}
        center={this.props.center}
        zoom={this.props.zoom} >
          <HomeMarker lat={this.props.auth.user.latitude} lng={this.props.auth.user.longitude} />

          {myRiderMarkers}

        </GoogleMapReact>
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
     drivers: state.driversReducer.drivers
   },
   carpoolsReducer: {
     carpools: state.carpoolsReducer.carpools,
     riderCarpool: state.carpoolsReducer.riderCarpool
   }
 }
}

export default connect(mapStateToProps)(Map)
