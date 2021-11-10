import { Paper } from '@mui/material'
import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styled from 'styled-components'

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 4,
  (x - rect.left - rect.width / 2) / 4,
  1.2,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SkillImg = styled('img')`
  ${({ theme }) => `
    width: 8vw;
    min-width: 70px;
    margin: auto;
    align: center;
    filter: invert(11%) sepia(28%) saturate(6958%) hue-rotate(194deg) brightness(102%) contrast(102%);
  `}
`

export default function ItemSkill({ img }) {
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
    <div ref={ref}>
      <animated.div
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect()
          set(calc(e.clientX, e.clientY, rect))
        }}
      >
        <Paper
          sx={{
            height: '9vw',
            width: '9vw',
            display: 'flex',
            minHeight: '80px',
            minWidth: '80px',
            justifyContent: 'center',
            margin: 2,
          }}
          elevation={5}
        >
          <SkillImg align="center" src={img}></SkillImg>
        </Paper>
      </animated.div>
    </div>
  )
}
