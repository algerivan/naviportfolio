import React, { useState } from 'react'
import { Typography, Grid } from '@mui/material'
import styled from 'styled-components'

import ProjectItem from './ProjectItem'
import ProjectDialog from './ProjectDialog'

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
  return (
    <ProjectsDiv>
      <ProjectDialog
        title="Test Project"
        open={open}
        onClose={() => setOpen(false)}
      />
      <ProjectsTitle sx={{ marginBottom: '-7vh' }} variant="h3">
        My projects / Portfolio
      </ProjectsTitle>
      <ProjectsGrid align="center" spacing={5} container>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
            <ProjectItem
              projectId="1a"
              onClick={() => setOpen(true)}
              img="https://miro.medium.com/max/2000/1*TEjMGT3zZKz2MaAZBZkXhw.png"
              name="DashboarClean"
            ></ProjectItem>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
            <ProjectItem
              img="https://i.ytimg.com/vi/d6xn5uflUjg/maxresdefault.jpg"
              projectId="2a"
              name="GProG"
            ></ProjectItem>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
            <ProjectItem
              img="https://assets.justinmind.com/wp-content/uploads/2020/02/dashboard-example-applify.png"
              projectId="3a"
              name="Another Dashboard"
            ></ProjectItem>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
            <ProjectItem
              img="https://files.muzli.space/cfe00bbe88281b69f64839f987f5e30f.jpeg"
              projectId="4a"
              name="Castorlab"
            ></ProjectItem>
          </div>
        </Grid>
      </ProjectsGrid>
    </ProjectsDiv>
  )
}
