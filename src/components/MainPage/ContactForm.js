import { TextField, Grid, Button } from '@mui/material'

export default function ContactForm() {
  return (
    <Grid component="form" noValidate autoComplete="off" container>
      <Grid item sx={{ padding: 3, marginTop: '-15px' }} xs={12} sm={6}>
        <TextField
          id="outlined-error"
          label="Full Name"
          defaultValue="Hello World"
          fullWidth
        />
      </Grid>
      <Grid item sx={{ padding: 3, marginTop: '-15px' }} xs={12} sm={6}>
        <TextField
          id="outlined-error"
          label="Email"
          defaultValue="Hello World"
          fullWidth
        />
      </Grid>
      <Grid item sx={{ padding: 3, marginTop: '-15px' }} xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          defaultValue="Default Value"
          fullWidth
        />
      </Grid>
      <Grid item sx={{ padding: 3, marginTop: '-25px' }} xs={12}>
        <Button color="primary" variant="contained">
          Contact Me!
        </Button>
      </Grid>
    </Grid>
  )
}
