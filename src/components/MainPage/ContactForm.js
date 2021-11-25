import { TextField, Grid, Button } from '@mui/material'
import styled from 'styled-components'

const ContactFormGrid = styled(Grid)`
  ${({ theme }) => `
    padding-right: 5vw;
    padding-left: 5vw;
    @media (min-width: 2000px) {
      padding-left: 5vw;
      padding-right: 15vw;
    }
  `}
`

export default function ContactForm() {
  return (
    <ContactFormGrid component="form" noValidate autoComplete="off" container>
      <Grid item sx={{ padding: 3, marginTop: '-15px' }} xs={12} sm={6}>
        <TextField
          id="outlined-error"
          label="Full Name"
          placeholder="What's your name?"
          fullWidth
        />
      </Grid>
      <Grid item sx={{ padding: 3, marginTop: '-15px' }} xs={12} sm={6}>
        <TextField
          id="outlined-error"
          label="Email"
          placeholder="Write your email ;)"
          fullWidth
        />
      </Grid>
      <Grid item sx={{ padding: 3, marginTop: '-15px' }} xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          placeholder="Your message here! :D"
          fullWidth
        />
      </Grid>
      <Grid item sx={{ padding: 3, marginTop: '-25px' }} xs={12}>
        <Button color="primary" variant="contained">
          Contact Me!
        </Button>
      </Grid>
    </ContactFormGrid>
  )
}
