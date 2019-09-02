import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import csv from 'csvtojson/v2'
import { csvData, jsonData } from '../mocks'

import {
  handleCheck,
  clearAllCheck,
  setJSONData,
  setCSVData,
  exportCSV
} from '../../store/actions'

import {
  SET_CHECKBOX,
  CLEAR_CHECKBOX,
  SET_JSON_DATA,
  SET_CSV_DATA,
  CSV_TO_EXPORT
} from '../../store/constants'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {}

describe('actions', () => {
  it('should dispatch handleCheck action', () => {
    const mockStore = configureStore()
    const store = mockStore(initialState)

    store.dispatch(handleCheck('total_age'))

    const storeActions = store.getActions()
    const expectedPayload = { type: SET_CHECKBOX, payload: 'total_age' }
    expect(storeActions).toEqual([expectedPayload])
  })

  it('should dispatch clearAllCheck action', () => {
    const mockStore = configureStore()
    const store = mockStore(initialState)

    store.dispatch(clearAllCheck())

    const storeActions = store.getActions()
    const expectedPayload = { type: CLEAR_CHECKBOX }
    expect(storeActions).toEqual([expectedPayload])
  })

  it('should dispatch setCSVDATA action', () => {
    const mockStore = configureStore()
    const store = mockStore(initialState)

    store.dispatch(setCSVData(csvData))

    const storeActions = store.getActions()
    const expectedPayload = { type: SET_CSV_DATA, payload: csvData }
    expect(storeActions).toEqual([expectedPayload])
  })
})

describe('async actions', () => {
  it('should convert CSV data to JSON data', () => {
    const store = mockStore(initialState)
    return store.dispatch(setJSONData('test', csvData)).then((json) => {
      const storeActions = store.getActions()
      const expectedPayload = { type: SET_JSON_DATA, payload: { test: jsonData } }
      expect(storeActions[0]).toEqual(expectedPayload)
    })
  })
  // setCSVData
  // it('should dispatch setCSVData action', () => {
  //   const store = mockStore(initialState)

  //   return store.dispatch(exportCSV(jsonData)).then(() => {
  //     const storeActions = store.getActions()
  //     const expectedPayload = { type: CSV_TO_EXPORT, payload: csvData }
  //     expect(storeActions).toEqual([expectedPayload])
  //   })
  // })
})
