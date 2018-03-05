export default (state = {
  isLoggedIn: false,
  user: {
    is_driver: null
  }
}, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {isLoggedIn: true, ...action.user}
    case 'LOG_OUT':
      return {isLoggedIn: false, user: {}}
    default:
      return state
  }
}
