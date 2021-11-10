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
          justifyContent: 'space-evenly',
          padding: 2,
        }}
      >
        <ItemSkill img="https://iconape.com/wp-content/files/pb/11670/png/react.png"></ItemSkill>
        <ItemSkill img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/2048px-HTML5_logo_black.svg.png"></ItemSkill>
        <ItemSkill img="https://cdn.iconscout.com/icon/free/png-256/css-124-624920.png"></ItemSkill>
        <ItemSkill img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Unofficial_JavaScript_logo.svg/480px-Unofficial_JavaScript_logo.svg.png"></ItemSkill>
        <ItemSkill img="https://iconape.com/wp-content/png_logo_vector/cib-vue-js.png"></ItemSkill>
        <ItemSkill img="https://img.icons8.com/windows/512/nodejs.png"></ItemSkill>
        <ItemSkill img="https://hushaamshah.github.io/pics/Csharp1.png"></ItemSkill>
        <ItemSkill img="http://www.luiscobian.com.mx/wp-content/uploads/2018/08/php-512.png"></ItemSkill>
        <ItemSkill img="https://iconape.com/wp-content/png_logo_vector/cib-postgresql.png"></ItemSkill>
        <ItemSkill img="https://datamajor.net/wp-content/uploads/2018/10/Sql-Server-Black-ed.png"></ItemSkill>
        <ItemSkill img="https://png.pngtree.com/svg/20170216/mongodb_1014590.png"></ItemSkill>
        <ItemSkill img="https://cdn.iconscout.com/icon/free/png-256/graphql-3445627-2878559.png"></ItemSkill>
        <ItemSkill img="https://icon-library.com/images/icon-api/icon-api-10.jpg"></ItemSkill>
        <ItemSkill img="https://i2.wp.com/www.mementotech.in/assets/images/icons/express.png"></ItemSkill>
        <ItemSkill img="https://i2.wp.com/www.mementotech.in/assets/images/icons/express.png"></ItemSkill>
        <ItemSkill img="https://i2.wp.com/www.mementotech.in/assets/images/icons/express.png"></ItemSkill>
      </div>
    </SkillsDiv>
  )
}
