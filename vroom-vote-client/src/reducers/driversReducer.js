export default (state = {
  drivers: []
}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, drivers: action.drivers }
    case 'GET_DISTRICT_DRIVERS':
      return { ...state, drivers: action.drivers }
    default:
      return state
  }
}
