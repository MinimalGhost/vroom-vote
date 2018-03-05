import { combineReducers } from 'redux'
import auth from './auth'
import driversReducer from './driversReducer'
import carpoolsReducer from './carpoolsReducer'

export default combineReducers({
  auth,
  driversReducer,
  carpoolsReducer
})
