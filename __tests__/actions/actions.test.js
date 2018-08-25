import configureStore from 'redux-mock-store'

import * as actions from '../../src/actions'

const mockStore = configureStore()
const store = mockStore()

describe('actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  describe('handleCheck', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'payload': 'total-age',
          'type': 'SET_CHECKBOX'
        }
      ]

      store.dispatch(actions.handleCheck('total-age'))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  
})

