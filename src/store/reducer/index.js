import homeReducer from './homeReducer'
import authReducer from './authReducer'
export default function rootReducer (state = {}, action) {
  return {
    ...state,
    auth: authReducer(state.auth, action),
    home: homeReducer(state.home, action)
  }
}