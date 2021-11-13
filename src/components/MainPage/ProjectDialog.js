import React from 'react'
import { Dialog, Typography, Grid, Stack, Chip, Button } from '@mui/material'
import styled from 'styled-components'

const MainDialog = styled(Dialog)`
  ${({ theme }) => `
    padding: 5;
  `}
`

const DialogContainer = styled(Grid)`
  ${({ theme }) => `
    padding: 5;
    display:flex;
    flex-direction: row;
    @media (max-width: 767px) {
      width:95vw;
    }
  `}
`

export default function ProjectDialog({ title, open, onClose }) {
  return (
    <MainDialog maxWidth="lg" open={open} onClose={onClose}>
      <Grid container>
        <Grid
          item
          sx={{
            height: '50vh',
            background:
              'url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-material-ui/argon-dashboard-material-ui.jpg) no-repeat center',
            backgroundSize: 'cover',
          }}
          xs={12}
          md={6}
        ></Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item sx={{ padding: 5 }} xs={12}>
              <Typography variant="h6">{title}</Typography>
            </Grid>
            <Grid sx={{ padding: 5, marginTop: '-70px' }} item xs={12}>
              <Stack direction="row" spacing={1}>
                <Chip label="ReactJS" size="small" color="secondary"></Chip>
                <Chip label="NodeJS" size="small" color="secondary"></Chip>
                <Chip label="RestAPI" size="small" color="secondary"></Chip>
                <Chip label="Nginx" size="small" color="secondary"></Chip>
                <Chip label="Docker" size="small" color="secondary"></Chip>
              </Stack>
            </Grid>
            <Grid sx={{ padding: 5, marginTop: '-40px' }} item xs={12}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                inventore placeat illum iure rerum dolor, quisquam quis velit
                mollitia reiciendis ad porro commodi quae similique officiis!
                Quidem temporibus tenetur, molestias natus eum quaerat dolorem
                iure vero debitis deserunt doloremque corporis?
              </Typography>
            </Grid>
            <Grid item sx={{ padding: 5, marginTop: '-30px' }} xs={12}>
              <Button
                variant="contained"
                sx={{ marginRight: '1rem', borderRadius: '20px' }}
              >
                Hola Perro
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '20px',
                }}
              >
                Hola Perro 2
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainDialog>
  )
}
