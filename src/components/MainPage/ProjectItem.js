import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from '@react-spring/web'
import { Typography, Card, CardMedia, CardContent } from '@mui/material'

const ProjectContainer = styled('div')`
  ${({ theme }) => `
    max-width: 80vw;
  `}
`

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 4,
  (x - rect.left - rect.width / 2) / 4,
  1.1,
]
const trans = (x, y, s) => `scale(${s})`

export default function ProjectItem({ img, name }) {
  const ref = useRef(null)
  const [xys, set] = useState([0, 0, 1])
  const config = {
    mass: 1,
    tension: 270,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t) => t,
  }

  const props = useSpring({ xys, config })
  return (
    <ProjectContainer ref={ref}>
      <animated.div
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect()
          set(calc(e.clientX, e.clientY, rect))
        }}
      >
        <Card>
          <CardMedia
            component="img"
            sx={{
              height: '25vh',
            }}
            image={img}
            alt={`image ${name}`}
          />
          <CardContent
            sx={{
              height: '1vh',
              margin: 'auto',
              justifyContent: 'center',
              display: 'flex',
              marginTop: '10px',
              alignItems: 'center',
            }}
          >
            <Typography align="center" variant="h6">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </animated.div>
    </ProjectContainer>
  )
}
