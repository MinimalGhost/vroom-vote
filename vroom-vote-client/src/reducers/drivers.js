export default (state = {
  drivers: null
}, action) => {
  switch (action.type) {
    case 'ADD_DISTRICT_DRIVERS':
      return { ...state, drivers: action.drivers }
    default:
      return state
  }
}
