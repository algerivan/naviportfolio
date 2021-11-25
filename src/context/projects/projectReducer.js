import { UPDATE_CURRENT_PROJECT } from '../../types'

const projectReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.payload,
      }
    default:
      return state
  }
}

export default projectReducer
