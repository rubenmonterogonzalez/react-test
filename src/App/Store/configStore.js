import {createStore} from 'redux'
import testReducer from '../../Components/Sandbox/testReducer'

export function configStore() {
  return createStore(testReducer)
}
