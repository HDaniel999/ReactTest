/* eslint-env jest */
import { addPrograms } from '../../../store/actions'
import { ADD_PROGRAMS } from '../../../store/actions/types'

describe('suite addPrograms action', () => {
  test('should return object type equal to ADD_PROGRAMS', () => {
    const action = addPrograms([])
    expect(action.type).toBe(ADD_PROGRAMS)
  })

  test('should get payload with empty array if programs parameter is missing', () => {
    const action = addPrograms()
    expect(action.payload).toEqual([])
  })
})