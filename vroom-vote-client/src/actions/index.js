export function logIn(user) {
  return { type: 'LOG_IN', user: user }
}

export function logOut() {
  return { type: 'LOG_OUT' }
}

export function getDistrictDrivers(drivers) {
  return { type: 'ADD_DISTRICT_DRIVERS', drivers: drivers }
}
