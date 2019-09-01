/**
 * As complexity of this application grows, reducers will be split into their respective files
 */

import {
  CLEAR_CHECKBOX,
  CSV_TO_EXPORT,
  SET_CHECKBOX,
  SET_CSV_DATA,
  SET_JSON_DATA
} from '../constants'

const initialState = {
  checked: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CSV_TO_EXPORT:
      return {
        ...state,
        csvExport: action.payload
      }
    case SET_CHECKBOX:
      return {
        ...state,
        checked: {
          ...state.checked,
          [action.payload]: !state.checked[action.payload]
        }
      }
    case CLEAR_CHECKBOX:
      return {
        ...state,
        checked: {
          ...Object.keys(state.checked).reduce((checked, col) => {
            checked[col] = false
            return checked
          }, {})
        }
      }
    case SET_CSV_DATA:
      return {
        ...state,
        csvData: action.payload
      }
    case SET_JSON_DATA:
      return {
        ...state,
        jsonData: {
          ...state.jsonData,
          ...action.payload
        }
      }
    default:
      return state
  }
}