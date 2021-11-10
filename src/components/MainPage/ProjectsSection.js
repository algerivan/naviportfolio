import { Typography, Grid } from '@mui/material'
import styled from 'styled-components'

import ProjectItem from './ProjectItem'

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
`}
`
export default function ProjectsSection() {
  return (
    <ProjectsDiv>
      <ProjectsTitle sx={{ marginBottom: '-7vh' }} variant="h3">
        My projects / Portfolio
      </ProjectsTitle>
      <Grid align="center" sx={{ padding: 3 }} spacing={5} container>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectItem
            projectId="1a"
            img="https://miro.medium.com/max/2000/1*TEjMGT3zZKz2MaAZBZkXhw.png"
            name="DashboarClean"
          ></ProjectItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectItem
            img="https://i.ytimg.com/vi/d6xn5uflUjg/maxresdefault.jpg"
            projectId="2a"
            name="GProG"
          ></ProjectItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectItem
            img="https://assets.justinmind.com/wp-content/uploads/2020/02/dashboard-example-applify.png"
            projectId="3a"
            name="Another Dashboard"
          ></ProjectItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectItem
            img="https://files.muzli.space/cfe00bbe88281b69f64839f987f5e30f.jpeg"
            projectId="4a"
            name="Castorlab"
          ></ProjectItem>
        </Grid>
      </Grid>
    </ProjectsDiv>
  )
}
