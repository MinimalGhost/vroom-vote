export default (state = {
  isLoggedIn: false,
  hasErrored: false,
  isLoading: false,
  user: {
    is_driver: false
  }
}, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return { ...state, isLoggedIn: true, ...action.user }
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false, user: {}}
    case 'HAS_ERRORED':
      return { ...state,  hasErrored: true, ...action.hasErrored }
    case 'IS_LOADING':
      return { ...state, isLoading: true, ...action.isLoading }
    default:
      return state
  }
}
