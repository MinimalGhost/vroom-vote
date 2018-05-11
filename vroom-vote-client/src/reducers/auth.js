export default (state = {
  isLoggedIn: false,
  user: {
    is_driver: null,
    carpools: [],
  }
}, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return { ...state, isLoggedIn: true, user: action.user }
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false, user: {}}
    case 'JOIN_CARPOOL':
    let user = {...state.user, carpools: [action.carpool]}
    let newState = { ...state, user}
    return newState
    default:
      return state
  }
}
