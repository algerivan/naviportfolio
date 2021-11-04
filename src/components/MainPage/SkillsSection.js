import React from 'react'
import styled from 'styled-components'

const SkillsDiv = styled('div')`
  ${({ theme }) => `
    padding: 5;
    width: 100vw;
    height: 30vh;
    background: #b7b7b7;
    @media (max-width: 767px) {
      width:100vw;
    }
  `}
`

export default function SkillsSection() {
  return <SkillsDiv></SkillsDiv>
}
