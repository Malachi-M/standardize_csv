import reducer from '../../store/reducers'
import {
  SET_CHECKBOX,
  CLEAR_CHECKBOX,
  SET_JSON_DATA,
  SET_CSV_DATA,
  CSV_TO_EXPORT
} from '../../store/constants'
import { csvData, jsonData } from '../mocks'

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      checked: {},
      jsonData: []
    })
  })

  it('should set a checkbox as either true or false', () => {
    expect(reducer({ checked: {} }, {
      type: SET_CHECKBOX,
      payload: 'test'
    })
    ).toEqual({
      checked: {
        test: true
      }
    })
  })

  it('should set a checkbox as either true or false', () => {
    expect(reducer({ checked: { test: true } }, {
      type: SET_CHECKBOX,
      payload: 'test'
    })
    ).toEqual({
      checked: {
        test: false
      }
    })
  })

  it('should set all state checked properties to false', () => {
    expect(reducer({ checked: { test: true, test_2: true } }, {
      type: CLEAR_CHECKBOX
    })
    ).toEqual({
      checked: {
        test: false,
        test_2: false
      }
    })
  })

  it('should set CSV data on the state csvData property', () => {
    expect(reducer({}, {
      type: SET_CSV_DATA,
      payload: csvData
    })
    ).toEqual({
      csvData: csvData
    })
  })

  it('should set JSON data on the state jsonData property', () => {
    expect(reducer({ jsonData: [] }, {
      type: SET_JSON_DATA,
      payload: jsonData
    })
    ).toEqual({
      jsonData: jsonData
    })
  })

  it('should set CSV data to be exported on the state csvExport property', () => {
    expect(reducer({}, {
      type: CSV_TO_EXPORT,
      payload: csvData
    })
    ).toEqual({
      csvExport: csvData
    })
  })


})
