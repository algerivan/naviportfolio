import React, { useContext } from 'react'
import { Dialog, Typography, Grid, Stack, Chip, Button } from '@mui/material'
import styled from 'styled-components'
import ProjectContext from '../../context/projects/ProjectContext'

const MainDialog = styled(Dialog)`
  ${({ theme }) => `
    padding: 5;
  `}
`

export default function ProjectDialog({ open, onClose }) {
  const projectsContext = useContext(ProjectContext)
  const { currentProject } = projectsContext

  if (!currentProject) {
    return null
  }

  const { technologies, name, description, liveDemoUrl, codeUrl, image } =
    currentProject

  return (
    <MainDialog maxWidth="lg" open={open} onClose={onClose}>
      <Grid container>
        <Grid
          item
          sx={{
            height: '50vh',
            background: `url(${image}) no-repeat center`,
            backgroundSize: 'cover',
          }}
          xs={12}
          md={6}
        ></Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item sx={{ padding: 5 }} xs={12}>
              <Typography variant="h6">{name}</Typography>
            </Grid>
            <Grid sx={{ padding: 5, marginTop: '-70px' }} item xs={12}>
              <Stack
                flexWrap="wrap"
                direction="row"
                alignItems="flex-start"
                spacing={1}
              >
                {technologies.map((tec) => (
                  <Chip
                    key={tec}
                    label={tec}
                    size="small"
                    color="secondary"
                    sx={{
                      marginBottom: '8px',
                    }}
                  ></Chip>
                ))}
              </Stack>
            </Grid>
            <Grid sx={{ padding: 5, marginTop: '-40px' }} item xs={12}>
              <Typography variant="body1">{description}</Typography>
            </Grid>
            <Grid item sx={{ padding: 5, marginTop: '-30px' }} xs={12}>
              <Button
                variant="contained"
                href={codeUrl}
                target="_blank"
                sx={{ marginRight: '1rem', borderRadius: '20px' }}
              >
                View Code
              </Button>
              {liveDemoUrl ? (
                <Button
                  variant="contained"
                  href={liveDemoUrl}
                  target="_blank"
                  sx={{
                    borderRadius: '20px',
                  }}
                >
                  Live Demo
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainDialog>
  )
}
