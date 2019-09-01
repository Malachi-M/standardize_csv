import { combineReducers } from 'redux'
import reducer from '.'
/**
 * The reducers are setup in a manner that will allow multiple reducers should the reducer logic be further encapsulated into content specific reducers
 */
export default combineReducers({
  reducer
})
