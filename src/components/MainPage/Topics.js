import { Grid, Paper, Typography } from '@mui/material'
import styled from 'styled-components'

import WaveAnimation from './WaveAnimation'

const TopicPaper = styled(Paper)`
  ${({ theme }) => `
    width: 80%;
    background-color: white;
    padding: 1.5rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  `}
`

export default function Topics() {
  return (
    <Grid spacing={2} container>
      <Grid item xs={12} sx={{ zIndex: 20 }}>
        <WaveAnimation></WaveAnimation>
      </Grid>
      <Grid align="center" item xs={12} md={4} sx={{ zIndex: 50 }}>
        <TopicPaper
          elevation={5}
          sx={{
            height: '60vh',
          }}
        >
          <Typography variant="h6">BackEnd Development</Typography>
          <img
            src="http://navizm.com/images/topics/backend.png"
            alt="2021-10-29-15h40-26"
            border="0"
            style={{
              marginTop: 10,
              maxWidth: '300px',
              minWidth: '150px',
              width: '20vw',
            }}
          ></img>
          <Typography sx={{ marginTop: 3 }} variant="overline">
            I've worked backend with .NET Core, JavaScript and PHP making REST
            APIS, WebSockets, etc. With different frameworks on each technology,
            based on the project architechture. I'm proud to say that this is my
            strongest skill.
          </Typography>
        </TopicPaper>
      </Grid>
      <Grid item align="center" xs={12} md={4} sx={{ zIndex: 100 }}>
        <TopicPaper
          sx={{
            height: '60vh',
          }}
          elevation={5}
        >
          <Typography variant="h6">FrontEnd Development</Typography>
          <img
            src="http://navizm.com/images/topics/frontend.png"
            alt="2021-10-29-15h40-26"
            border="0"
            style={{
              marginTop: 10,
              maxWidth: '300px',
              minWidth: '150px',
              width: '20vw',
            }}
          ></img>
          <Typography sx={{ marginTop: 3 }} variant="overline">
            I've been working on Front-End development from the beginnig, I love
            doing simple and beautiful web designs using different frameworks
            like VueJS and ReactJS, I'm still learning with every project to
            strengthen my Front-End skills.
          </Typography>
        </TopicPaper>
      </Grid>
      <Grid align="center" item xs={12} md={4} sx={{ zIndex: 90 }}>
        <TopicPaper
          sx={{
            height: '60vh',
          }}
          elevation={5}
        >
          <Typography variant="h6">Server Management</Typography>
          <img
            src="http://navizm.com/images/topics/servers.png"
            alt="2021-10-29-15h40-26"
            border="0"
            style={{
              marginTop: 10,
              maxWidth: '300px',
              minWidth: '150px',
              width: '20vw',
            }}
          ></img>
          <Typography sx={{ marginTop: 3 }} variant="overline">
            I've been hosting by myself all my personal projects, using
            different technologies, such as Docker, Docker-Compose, Kubernetes
            and NGINX as a web server and Reverse-Proxy, implementing CI/CD
            Pipelines with GitLab and Docker for testing and deployment.
          </Typography>
        </TopicPaper>
      </Grid>
    </Grid>
  )
}
