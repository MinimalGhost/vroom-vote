export function logIn(user) {
  return { type: 'LOG_IN', user: user }
}

export function logOut() {
  return { type: 'LOG_OUT' }
}

export function getDistrictDrivers(drivers) {
  return { type: 'GET_DISTRICT_DRIVERS', drivers: drivers }
}

export function setMyDriver(myDriver) {
  return { type: 'SET_MY_DRIVER', myDriver: myDriver }
}
