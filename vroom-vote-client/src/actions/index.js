export function logIn(user) {
  console.log(user);
  return { type: 'LOG_IN', ...user }
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

export function joinCarpool(carpool) {
  return { type: 'JOIN_CARPOOL', carpool }
}

export function getDriverCarpool(driverCarpool) {
  return { type: 'GET_DRIVER_CARPOOL', driverCarpool: driverCarpool }
}
