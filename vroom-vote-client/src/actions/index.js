export function logIn(user) {
  return { type: 'LOG_IN', user: user }
}

export function logOut() {
  return { type: 'LOG_OUT' }
}

export function getDistrictDrivers(drivers) {
  return { type: 'GET_DISTRICT_DRIVERS', drivers: drivers }
}

export function getRiderCarpool(riderCarpool) {
  return { type: 'GET_RIDER_CARPOOL', riderCarpool: riderCarpool }
}

export function getDriverCarpool(driverCarpool) {
  return { type: 'GET_DRIVER_CARPOOL', driverCarpool: driverCarpool }
}
