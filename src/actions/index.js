import csv from 'csvtojson/v2'
import { parse } from 'json2csv'

export const handleCheck = (id) => ({
  type: 'SET_CHECKBOX',
  payload: id
})

export const exportCSV = (data) => dispatch => {
  const opts = {
    includeEmptyRows: true,
    unwind: true
  }
  const csv = parse(data,opts)
  dispatch({
    type: 'CSV_TO_EXPORT',
    payload: csv
  })
} 

export const setJSONData = (data) => dispatch => {
  csv().fromString(data)
    .then(json => (
      dispatch({
        type: 'SET_JSON_DATA',
        payload: json
      })
    ))
}


export const setCSVData = data => ({
  type: 'SET_CSV_DATA',
  payload: data
})