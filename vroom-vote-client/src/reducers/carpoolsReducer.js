export default (state = {
  carpools: null,
  riderCarpool: null
}, action) => {
  switch (action.type) {
    case 'GET_RIDER_CARPOOL':
      return { ...state, riderCarpool: action.riderCarpool }
    default:
      return state
  }
}
