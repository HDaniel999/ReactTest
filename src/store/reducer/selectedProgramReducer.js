import { SET_SELECTED_PROGRAM } from '../actions/types'
export default function selectedProgramReducer (state = null, action) {
  if (action.type === SET_SELECTED_PROGRAM) {
    return action.payload
  }
  return state
}