import React, { useReducer } from 'react'
import ProjectContext from './ProjectContext'
import projectReducer from './projectReducer'

import { UPDATE_CURRENT_PROJECT } from '../../types'

const ProjectState = (props) => {
  const initialState = {
    currentProject: null,
  }

  const [state, dispatch] = useReducer(projectReducer, initialState)

  const updateCurrentProject = (project) => {
    dispatch({
      type: UPDATE_CURRENT_PROJECT,
      payload: project,
    })
  }

  return (
    <ProjectContext.Provider
      value={{
        currentProject: state.currentProject,
        updateCurrentProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState
