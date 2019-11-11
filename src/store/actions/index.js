/* global fetch */
import { ADD_PROGRAMS, AUTHENTICATE_USER, SET_SELECTED_PROGRAM } from './types'

export function addPrograms (programs = []) {
  return {
    type: ADD_PROGRAMS,
    payload: programs
  }
}

export function authenticateUser (auth) {
  return {
    type: AUTHENTICATE_USER,
    payload: auth
  }
}

export function setSelectedProgram (program) {
  return {
    type: SET_SELECTED_PROGRAM,
    payload: program
  }
}

export function fetchPrograms () {
  return (dispatch) => {
    return fetch('http://localhost:3001/programs')
      .then(response => response.json())
      .then(programs => {
        dispatch(addPrograms(programs))
      })
      .catch(console.error)
  }
}