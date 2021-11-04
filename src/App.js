import MainPage from './components/MainPage/MainPage'
import ContactPage from './components/ContactPage/ContactPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ThemeProvider } from 'styled-components'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00325e',
      light: '#3c5b8c',
      dark: '#000a34',
    },
    secondary: {
      main: '#ffb74d',
      light: '#ffe97d',
      dark: '#c88719',
    },
    terciary: {
      main: '#424242',
      light: '#6d6d6d',
      dark: '#1b1b1b',
    },
  },
})

theme.typography.h3 = {
  fontSize: '1.7rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.7rem',
  },
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default App
