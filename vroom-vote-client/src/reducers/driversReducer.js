export default (state = {
  drivers: [],
  ride: null
}, action) => {
  switch (action.type) {
    case 'ADD_DISTRICT_DRIVERS':
      return { ...state, drivers: action.drivers }
    case 'ADD_MY_RIDE':
      return { ...state, ride: action.ride }
    default:
      return state
  }
}
