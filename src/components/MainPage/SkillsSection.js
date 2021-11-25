import React, { useContext } from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

import ItemSkill from './ItemSkill'
import SkillContext from '../../context/skills/SkillContext'
import { skills } from '../../data/skillsData'

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
    @media (min-width: 2000px) {
      padding-left: 5vw;
      padding-right: 5vw;
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
const SkillNameText = styled(Typography)`
  ${({ theme }) => `
  padding: 2rem;
  font-weight: bold;
  color: ${theme.palette.primary.main};
`}
`

export default function SkillsSection() {
  const skillsContext = useContext(SkillContext)
  const { currentSkill } = skillsContext

  return (
    <SkillsDiv>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <SkillsTitle variant="h3">Technical Skills</SkillsTitle>
        {currentSkill ? (
          <SkillNameText variant="h3">{currentSkill}</SkillNameText>
        ) : null}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          padding: 2,
        }}
      >
        {skills.map(({ name, image }) => (
          <ItemSkill name={name} img={image}></ItemSkill>
        ))}
      </div>
    </SkillsDiv>
  )
}
