import { ADD_PROGRAMS } from '../actions/types'
export default function programsReducer (state = [], action) {
  if (action.type === ADD_PROGRAMS) {
    return action.payload
  }
  return state
}