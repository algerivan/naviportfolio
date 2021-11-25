import React, { useState, useContext } from 'react'
import { Typography, Grid } from '@mui/material'
import styled from 'styled-components'
import { projects } from '../../data/projectsData'

import ProjectItem from './ProjectItem'
import ProjectDialog from './ProjectDialog'
import ProjectContext from '../../context/projects/ProjectContext'

const ProjectsDiv = styled('div')`
  ${({ theme }) => `
    padding: 5;
    width: 100vw;
    padding-bottom: 5vh;
    background: ${theme.palette.secondary.main};
    @media (max-width: 767px) {
      width:100vw;
    }
  `}
`

const ProjectsGrid = styled(Grid)`
  ${({ theme }) => `
    padding: 2vw;
    background: ${theme.palette.secondary.main};
    @media (min-width: 2000px) {
      padding-left: 5vw;
      padding-right: 5vw;
    }
  `}
`

const ProjectsTitle = styled(Typography)`
  ${({ theme }) => `
  padding: 2rem;
  font-weight: bold;
  background-color: #0f0f0f;
  color: transparent;
  float: right;
  text-shadow: 0px 2px 3px #4747477c;
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
  @media (min-width: 2000px) {
      padding-right: 5vw;
    }
`}
`
export default function ProjectsSection() {
  const [open, setOpen] = useState(false)

  const projectsContext = useContext(ProjectContext)
  const { updateCurrentProject } = projectsContext

  const handleOpenDialog = (project) => {
    console.log(project)
    updateCurrentProject(project)
    setOpen(true)
  }

  const handleCloseDialog = () => {
    updateCurrentProject(null)
    setOpen(false)
  }

  return (
    <ProjectsDiv>
      <ProjectDialog open={open} onClose={() => handleCloseDialog()} />
      <ProjectsTitle sx={{ marginBottom: '-7vh' }} variant="h3">
        My projects / Portfolio
      </ProjectsTitle>
      <ProjectsGrid align="center" spacing={5} container>
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => handleOpenDialog(project)}
            >
              <ProjectItem
                projectId={project.id}
                img={project.image}
                name={project.name}
              ></ProjectItem>
            </div>
          </Grid>
        ))}
      </ProjectsGrid>
    </ProjectsDiv>
  )
}
