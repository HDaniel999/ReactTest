import { AUTHENTICATE_USER } from '../actions/types'

export default function authReducer (state = false, action) {
  if (action.type === AUTHENTICATE_USER) {
    return action.payload
  }
  return state
}