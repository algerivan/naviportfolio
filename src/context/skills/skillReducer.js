import { UPDATE_CURRENT_SKILL } from '../../types'

const skillReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_SKILL:
      return {
        ...state,
        currentSkill: action.payload,
      }
    default:
      return state
  }
}

export default skillReducer
