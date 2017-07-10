import { combineReducers } from 'redux'
import time from './timeReducer'
import music from './musicReducer'

export default combineReducers({
  time,
  music
})
