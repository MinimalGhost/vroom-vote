export default (state = {
  drivers: []
}, action) => {
  switch (action.type) {
    case 'ADD_DISTRICT_DRIVERS':
      return { ...state, drivers: action.drivers }
    default:
      return state
  }
}
