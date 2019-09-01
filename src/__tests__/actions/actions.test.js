import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../store/actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {}

describe('actions', () => {

  it('should dispatch handleCheck action', () => {
    const handleCheck = actions.handleCheck
    const mockStore = configureStore()
    const store = mockStore(initialState)

    store.dispatch(handleCheck('total_age'))

    const storeActions = store.getActions()
    const expectedPayload = { type: 'SET_CHECKBOX', payload: 'total_age' }
    expect(storeActions).toEqual([expectedPayload])
  })

  it('should dispatch clearAllCheck action', () => {
    const clearAllCheck = actions.clearAllCheck
    const mockStore = configureStore()
    const store = mockStore(initialState)

    store.dispatch(clearAllCheck())

    const storeActions = store.getActions()
    const expectedPayload = { type: 'CLEAR_CHECKBOX' }
    expect(storeActions).toEqual([expectedPayload])
  })

  it('should dispatch exportCSV action', () => {
    const exportCSV = actions.exportCSV
    const mockStore = configureStore(middlewares)
    const store = mockStore(initialState)


    store.dispatch(exportCSV([]))

    const storeActions = store.getActions()
    const expectedPayload = { type: 'SET_CHECKBOX', payload: 'total_age' }
    expect(storeActions).toEqual([expectedPayload])
  })
})
