import { Typography } from '@mui/material'
import styled from 'styled-components'

const FooterContainer = styled('div')`
  ${({ theme }) => `
    width: 100vw;
    height: 10vh;
    background: #00325e;
    margin-top:10vh;
    display:flex;
    justify-content:center;
    align-items:center;
  `}
`

const FooterText = styled(Typography)`
  ${({ theme }) => `
    display:flex;
  `}
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText variant="h6" color="primary.contrastText">
        All rights reserved. Alger Ivan Zamudio. NaviDev
      </FooterText>
    </FooterContainer>
  )
}
