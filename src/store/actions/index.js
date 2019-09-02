/**
 * With a more complex application these actions will be split into their respective files.
 */

import csv from 'csvtojson/v2'
import { parseAsync } from 'json2csv'
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
export const exportCSV = (
  data,
  opts
) => dispatch => {
  const fields = Object.keys(data[0])

  return parseAsync(data, { ...opts, fields })
    .then((csv) => {
      dispatch({
        type: CSV_TO_EXPORT,
        payload: csv
      })
    })
    .catch(err => console.error(err))
  // BUG with error throwing: https://github.com/zemirco/json2csv/pull/412
}

export const setJSONData = (name, data) => dispatch => {
  return csv({ checkType: true }).fromString(data)
    .then(json => {
      dispatch({
        type: SET_JSON_DATA,
        payload: {
          [name]: json
        }
      })
    })
    .catch(err => console.error(err))
}

export const setCSVData = data => ({
  type: SET_CSV_DATA,
  payload: data
})
