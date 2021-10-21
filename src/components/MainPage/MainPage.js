import React, { Fragment } from 'react'
import NavBar from '../NavBar/NavBar'
import { CssBaseline, Typography } from '@mui/material'

const styles = {
  firstSection: {
    height: '93.3vh',
    backgroundColor: '#00325e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  imageAvatar: {
    padding: 20,
    maxWidth: '300px',
  },
  hiTypo: {
    padding: 5,
    width: '50vw',
    marginTop: '-7vh',
  },
}

export default function MainPage() {
  return (
    <Fragment>
      <CssBaseline />
      <NavBar></NavBar>
      <div style={styles.firstSection}>
        <div style={styles.hiTypo}>
          <Typography color="primary.contrastText" align="center" variant="h6">
            Hi, Im Alger Ivan Zamudio, Web Developer
          </Typography>
          <Typography color="primary.contrastText" align="center" variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            repellendus, eaque soluta eius aliquam laboriosam doloremque
            assumenda impedit temporibus voluptates qui obcaecati iusto eligendi
            possimus reprehenderit laudantium quidem quis aut.
          </Typography>
          <Typography color="primary.contrastText" align="center" variant="h6">
            Y me gusta programar
          </Typography>
        </div>
      </div>
    </Fragment>
  )
}
