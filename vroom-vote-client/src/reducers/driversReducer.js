export default (state = {
  drivers: [],
  carpools: []
}, action) => {
  switch (action.type) {
    case 'GET_DISTRICT_DRIVERS':
      return { ...state, drivers: action.drivers }
    case 'UPDATE_CARPOOL':
      return { ...state, carpools: action.carpools }
    default:
      return state
  }
}
