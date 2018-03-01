import { combineReducers } from 'redux'
import auth from './auth'
import driversReducer from './driversReducer'

export default combineReducers({
  auth,
  driversReducer
})
