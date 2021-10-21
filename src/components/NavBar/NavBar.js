import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import styled from 'styled-components'

const NavButton = styled(Button)`
  ${({ theme }) => `
    border: 0px solid;
    margin-right:5px;
    margin-left:5px;
    transition: ${theme.transitions.create(['border'], {
      duration: 80,
      easing: theme.transitions.easing.easeInOut,
    })};
    &:hover{
      border: 4px solid !important;
      margin-right:10px;
      margin-left:10px;
    }
  `}
`

const StyledToolBar = styled(Toolbar)`
  ${({ theme }) => `
    justify-content: flex-end;
  `}
`

export default function NavBar() {
  return (
    <AppBar elevation={0} position="static" color="primary">
      <StyledToolBar>
        <NavButton variant="text" color="secondary">
          About Me
        </NavButton>
        <NavButton variant="text" color="secondary">
          Works
        </NavButton>
        <NavButton variant="text" color="secondary">
          Contact
        </NavButton>
      </StyledToolBar>
    </AppBar>
  )
}
