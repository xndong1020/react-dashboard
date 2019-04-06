import React from 'react'
import { shallow } from 'enzyme'

/***
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param { object } props - Component props specific to this setup
 * @param { any } state - Initial state for setup
 * @returns { ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

test('renders without error', () => {})
