export default (state = {
  drivers: [],
  myDriver: null
}, action) => {
  switch (action.type) {
    case 'GET_DISTRICT_DRIVERS':
      return { ...state, drivers: action.drivers }
    case 'SET_MY_DRIVER':
      return { ...state, myDriver: action.myDriver }
    default:
      return state
  }
}
