/**
 * With a more complex application these actions will be split into their respective files.
 */

import csv from 'csvtojson/v2'
import { parse } from 'json2csv'
import {
  CLEAR_CHECKBOX,
  CSV_TO_EXPORT,
  SET_CHECKBOX,
  SET_CSV_DATA,
  SET_JSON_DATA
} from '../constants'

export const handleCheck = (id) => ({
  type: SET_CHECKBOX,
  payload: id
})

export const clearAllCheck = () => ({
  type: CLEAR_CHECKBOX
})

/**
 * exportCSV is not currently implemented
 */
export const exportCSV = (data) => {
  return dispatch => {
    const opts = {
      includeEmptyRows: true,
      unwind: true
    }
    const csv = parse(data, opts)
    dispatch({
      type: CSV_TO_EXPORT,
      payload: csv
    })
  }
}

export const setJSONData = (name, data) => dispatch => {
  csv().fromString(data)
    .then(json => (
      dispatch({
        type: SET_JSON_DATA,
        payload: {
          [name]: json
        }
      })
    ))
}

export const setCSVData = data => ({
  type: SET_CSV_DATA,
  payload: data
})
