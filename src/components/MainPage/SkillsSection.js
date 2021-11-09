import React from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

import ItemSkill from './ItemSkill'

const SkillsDiv = styled('div')`
  ${({ theme }) => `
    padding: 5;
    width: 100vw;
    height: auto;
    padding-bottom: 5vh;
    background: ${theme.palette.secondary.main};
    @media (max-width: 767px) {
      width:100vw;
    }
  `}
`

const SkillsTitle = styled(Typography)`
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

export default function SkillsSection() {
  return (
    <SkillsDiv>
      <SkillsTitle variant="h3">Technical Skills</SkillsTitle>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: '3vw',
        }}
      >
        <ItemSkill></ItemSkill>
        <ItemSkill></ItemSkill>
        <ItemSkill></ItemSkill>
        <ItemSkill></ItemSkill>
        <ItemSkill></ItemSkill>
        <ItemSkill></ItemSkill>
      </div>
    </SkillsDiv>
  )
}
