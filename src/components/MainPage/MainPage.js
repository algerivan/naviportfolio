import React, { useRef } from 'react'
import ReactAnime from 'react-animejs'
import { CssBaseline, Typography } from '@mui/material'
import { Scrollbars } from 'react-custom-scrollbars'
import styled from 'styled-components'

import NavBar from '../NavBar/NavBar'
import Topics from './Topics'
import Footer from './Footer'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'

const styles = {
  firstSection: {
    height: '89.5vh',
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
    width: '52vw',
  },
}

const MainText = styled('div')`
  ${({ theme }) => `
    padding: 5;
    width: 52vw;
    @media (max-width: 767px) {
      width:85vw;
    }
  `}
`

const text1 = 'Im a Full-Stack web developer.'
const text2 =
  'Im passionate about solving problems using the magic of the software technology, making Web and Desktop apps to make life easier.'

const textSpan1 = text1.split('').map((letter) => (
  <span key={Math.random()} className="letter">
    {letter}
  </span>
))
const textSpan2 = text2.split('').map((letter) => (
  <span key={Math.random()} className="letter">
    {letter}
  </span>
))

export default function MainPage() {
  const { Anime } = ReactAnime
  const aboutMeRef = useRef(null)
  const worksRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <Scrollbars style={{ height: '100vh' }}>
      <CssBaseline />
      <NavBar
        aboutMeRef={aboutMeRef}
        worksRef={worksRef}
        contactRef={contactRef}
      ></NavBar>
      <section ref={aboutMeRef} style={styles.firstSection}>
        <MainText>
          <Anime
            initial={[
              {
                targets: '#text1,#text2,.letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: 'easeOutExpo',
                duration: 50,
                delay: (el, i) => 20 * i,
              },
            ]}
            _onMouseOver={[
              {
                targets: '.letter',
                color: '#ffb74d',
              },
            ]}
            _onMouseLeave={[
              {
                targets: '.letter',
                color: '#fff',
              },
            ]}
          >
            <Typography
              color="primary.contrastText"
              align="center"
              variant="h6"
              className="ml12"
              id="text1"
            >
              {textSpan1}
            </Typography>
            <Typography
              color="primary.contrastText"
              align="center"
              className="ml12"
              variant="h6"
              id="text2"
            >
              {textSpan2}
            </Typography>
          </Anime>
        </MainText>
      </section>
      <section style={{ marginTop: '-13vh', marginBottom: '5vh' }}>
        <Topics />
      </section>
      <section>
        <SkillsSection />
      </section>
      <section ref={worksRef}>
        <ProjectsSection />
      </section>
      <section ref={contactRef}>
        <ContactSection />
      </section>
      <section>
        <Footer />
      </section>
    </Scrollbars>
  )
}
