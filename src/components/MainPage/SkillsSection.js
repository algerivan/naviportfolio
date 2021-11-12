import React, { useContext } from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

import ItemSkill from './ItemSkill'
import SkillContext from '../../context/skills/SkillContext'

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
        <ItemSkill
          name="React JS"
          img="https://iconape.com/wp-content/files/pb/11670/png/react.png"
        ></ItemSkill>
        <ItemSkill
          name="HTML 5"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/2048px-HTML5_logo_black.svg.png"
        ></ItemSkill>
        <ItemSkill
          name="CSS 3"
          img="https://cdn.iconscout.com/icon/free/png-256/css-124-624920.png"
        ></ItemSkill>
        <ItemSkill
          name="JavaScritp"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Unofficial_JavaScript_logo.svg/480px-Unofficial_JavaScript_logo.svg.png"
        ></ItemSkill>
        <ItemSkill
          name="Vue JS"
          img="https://iconape.com/wp-content/png_logo_vector/cib-vue-js.png"
        ></ItemSkill>
        <ItemSkill
          name="Node JS"
          img="https://img.icons8.com/windows/512/nodejs.png"
        ></ItemSkill>
        <ItemSkill
          name="C#"
          img="https://hushaamshah.github.io/pics/Csharp1.png"
        ></ItemSkill>
        <ItemSkill
          name="PHP"
          img="http://www.luiscobian.com.mx/wp-content/uploads/2018/08/php-512.png"
        ></ItemSkill>
        <ItemSkill
          name="PostgreSQL"
          img="https://iconape.com/wp-content/png_logo_vector/cib-postgresql.png"
        ></ItemSkill>
        <ItemSkill
          name="SQL Server"
          img="https://datamajor.net/wp-content/uploads/2018/10/Sql-Server-Black-ed.png"
        ></ItemSkill>
        <ItemSkill
          name="MongoDB"
          img="https://png.pngtree.com/svg/20170216/mongodb_1014590.png"
        ></ItemSkill>
        <ItemSkill
          name="GraphQL"
          img="https://cdn.iconscout.com/icon/free/png-256/graphql-3445627-2878559.png"
        ></ItemSkill>
        <ItemSkill
          name="REST API"
          img="https://icon-library.com/images/icon-api/icon-api-10.jpg"
        ></ItemSkill>
        <ItemSkill
          name="EXPRESS JS"
          img="https://i2.wp.com/www.mementotech.in/assets/images/icons/express.png"
        ></ItemSkill>
        <ItemSkill
          name="EXPRESS 2"
          img="https://i2.wp.com/www.mementotech.in/assets/images/icons/express.png"
        ></ItemSkill>
        <ItemSkill
          name="EXPRESS 3"
          img="https://i2.wp.com/www.mementotech.in/assets/images/icons/express.png"
        ></ItemSkill>
      </div>
    </SkillsDiv>
  )
}
