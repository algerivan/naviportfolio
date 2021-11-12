import React, { useReducer } from 'react'
import SkillContext from './SkillContext'
import skillReducer from './skillReducer'

import { UPDATE_CURRENT_SKILL } from '../../types'

const SkillState = (props) => {
  const initialState = {
    currentSkill: null,
  }

  const [state, dispatch] = useReducer(skillReducer, initialState)

  const updateCurrentSkill = (skill) => {
    dispatch({
      type: UPDATE_CURRENT_SKILL,
      payload: skill,
    })
  }

  return (
    <SkillContext.Provider
      value={{
        currentSkill: state.currentSkill,
        updateCurrentSkill,
      }}
    >
      {props.children}
    </SkillContext.Provider>
  )
}

export default SkillState
