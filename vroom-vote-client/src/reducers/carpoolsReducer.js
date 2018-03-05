export default (state = {
  carpools: null,
  riderCarpool: null,
  driverCarpool: null
}, action) => {
  switch (action.type) {
    case 'GET_RIDER_CARPOOL':
      return { ...state, riderCarpool: action.riderCarpool }
      case 'GET_DRIVER_CARPOOL':
        return { ...state, riderCarpool: action.driverCarpool }
    default:
      return state
  }
}
