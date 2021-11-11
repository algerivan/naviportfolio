import styled from 'styled-components'
import { Grid, Typography } from '@mui/material'

import ContactForm from './ContactForm'

const ContactContainer = styled('div')`
  ${({ theme }) => `
    padding: 5;
    width: 100vw;
    padding-bottom: 5vh;
    background: white;
  `}
`

const ContactTitle = styled(Typography)`
  ${({ theme }) => `
  padding: 2rem;
  font-weight: bold;
  background-color: #0f0f0f;
  color: transparent;
  text-shadow: 0px 2px 3px #4747477c;
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
`}
`

const ContactInfoGrid = styled(Grid)`
  ${({ theme }) => `
    padding-left: 5vw;
    @media (min-width: 2000px) {
      padding-left: 15vw;
      padding-right: 0vw;
    }
    @media (max-width: 767px) {
      padding-right: 5vw;
    }
  `}
`

export default function ContactSection() {
  return (
    <ContactContainer>
      <ContactTitle align="center" variant="h3">
        Let's get in touch!
      </ContactTitle>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '-25px',
        }}
      >
        <div
          style={{
            width: '90vw',
            height: '7px',
            backgroundColor: '#00325e',
            marginBottom: '5vh',
          }}
        ></div>
      </div>
      <Grid container>
        <ContactInfoGrid xs={12} sm={4} item>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illo
            cupiditate recusandae quia ipsam consequuntur nostrum, dolor
            laudantium sunt, provident numquam aliquid illum ratione? Corporis
            officia quam fugit quae. Culpa!
          </p>
        </ContactInfoGrid>
        <Grid xs={12} sm={8} item>
          <ContactForm />
        </Grid>
      </Grid>
    </ContactContainer>
  )
}
