import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import ReactAnime from 'react-animejs'
import useWindowDimensions from '../../hooks/useWindowDimensions'

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
const TopNavBar = styled(AppBar)`
  ${({ theme }) => `
    min-height: 3vh;
  `}
`

const NameText = styled(Typography)`
  ${({ theme }) => `
      color: ${theme.palette.secondary.main};
      flex-grow: 1;
      @media (max-width: 767px) {
        text-align:center;
      }
    `}
`

const ButtonsContainer = styled('div')`
  ${({ theme }) => `
      display:flex;
      @media (max-width: 767px) {
        display:none;
      }
    `}
`

export default function NavBar({ aboutMeRef, contactRef, worksRef }) {
  const { Anime } = ReactAnime

  const { width } = useWindowDimensions()

  return (
    <TopNavBar elevation={0} position="absolute" color="primary">
      <StyledToolBar>
        <Anime
          _onMouseOver={[
            {
              targets: '#nametext',
              scale: 1.2,
              translateX: width < 768 ? 0 : '7vw',
            },
          ]}
          _onMouseLeave={[
            {
              targets: '#nametext',
              scale: 1,
              translateX: 0,
            },
          ]}
          style={{ flexGrow: 1 }}
        >
          <NameText id="nametext" variant="h6" component="div">
            Alger Ivan Zamudio
          </NameText>
        </Anime>
        <ButtonsContainer>
          <NavButton className="navButton" variant="text" color="secondary">
            Download CV
          </NavButton>
          <NavButton
            onClick={() =>
              aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
            }
            className="navButton"
            variant="text"
            color="secondary"
          >
            About Me
          </NavButton>
          <NavButton
            onClick={() =>
              worksRef.current.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="navButton"
            variant="text"
            color="secondary"
          >
            Works
          </NavButton>
          <NavButton
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: 'smooth' })
            }
            className="navButton"
            variant="text"
            color="secondary"
          >
            Contact
          </NavButton>
        </ButtonsContainer>
      </StyledToolBar>
    </TopNavBar>
  )
}
