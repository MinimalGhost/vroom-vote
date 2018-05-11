import config from '../config'

export function logIn(user) {
  return { type: 'LOG_IN', ...user }
}

export function logOut() {
  return { type: 'LOG_OUT' }
}

export function getRiderCarpool(riderCarpool) {
  return { type: 'GET_RIDER_CARPOOL', riderCarpool: riderCarpool }
}

export function joinCarpool(carpool) {
  return { type: 'JOIN_CARPOOL', carpool }
}

export function getDriverCarpool(driverCarpool) {
  return { type: 'GET_DRIVER_CARPOOL', driverCarpool: driverCarpool }
}

export function getMyLocation(driverAddress) {
  return (dispatch) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${driverAddress}&key=${config.GEOCODE_KEY}`)
    .then(resp => resp.json())
  }
}
