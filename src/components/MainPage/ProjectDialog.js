import React from 'react'
import { Dialog, Typography, Grid } from '@mui/material'
import styled from 'styled-components'

const MainDialog = styled(Dialog)`
  ${({ theme }) => `
    padding: 5;
    @media (max-width: 767px) {
      width:90vw;
    }
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
    <MainDialog maxWidth="md" open={open} onClose={onClose}>
      <DialogContainer>
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/01/01/ux-ui-admin-panel-template-website-user-dashboard-vector-29630101.jpg"
          alt="ux ui"
          style={{ width: '40vw', objectFit: 'contain' }}
        />
        <Grid container>
          <Grid item sx={{ padding: 5 }} xs={12}>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid sx={{ padding: 5, marginTop: '-100px' }} item xs={12}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
              inventore placeat illum iure rerum dolor, quisquam quis velit
              mollitia reiciendis ad porro commodi quae similique officiis!
              Quidem temporibus tenetur, molestias natus eum quaerat dolorem
              iure vero debitis deserunt doloremque corporis?
            </Typography>
          </Grid>
        </Grid>
      </DialogContainer>
    </MainDialog>
  )
}
