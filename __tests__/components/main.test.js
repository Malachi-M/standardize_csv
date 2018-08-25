import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

import Main from '../../src/components/main'

const mockStore = configureStore()
const initialStore = {

}

const store = mockStore(initialState)

describe('<Main />', () => {

  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Main />)
      const component = wrapper.dive()

      expect(toJson(component)).toMatchSnapshot()
    })
  })
})

