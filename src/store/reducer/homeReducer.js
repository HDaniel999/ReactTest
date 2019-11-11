import programsReducer from './programsReducer'
import selectedProgramReducer from './selectedProgramReducer'
export default function homeReducer (state = {}, action) {
  return {
    ...state,
    programs: programsReducer(state.programs, action),
    selectedProgram: selectedProgramReducer(state.selectedProgram, action)
  }
}