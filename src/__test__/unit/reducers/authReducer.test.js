/* eslint-env jest */
import authReducer from '../../../store/reducer/authReducer'
import { authenticateUser } from '../../../store/actions'

describe('suite auth reducer', () => {
  test('should return false when state is undefined', () => {
    const result = authReducer(undefined, {})
    expect(result).toBeFalsy()
  })
  test('should return the same of the payload in action', () => {
    const action = authenticateUser(true)
    const result = authReducer(undefined, action)
    expect(result).toBeTruthy()
  })
  test('should return the same value of state if action doesnt match', () => {
    const result = authReducer(true, { payload: false })
    expect(result).toBeTruthy()
  })
})