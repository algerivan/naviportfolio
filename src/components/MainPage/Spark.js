import styled from 'styled-components'

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getYPos = () => {
  const { innerHeight: height } = window
  return randomIntFromInterval(50, height - 150)
}

const getXPos = () => {
  const { innerWidth: width } = window
  return randomIntFromInterval(1, width)
}

const SparkDot = styled('img')`
  ${({ theme }) => `
    width:5px;
    height:5px;
    position:absolute;
    background-color:white;
    top: ${getYPos()}px;
    left: ${getXPos()}px;
    border-radius:5px;
    border: 0px solid red;
  `}
`

export default function Spark() {
  return <SparkDot className="dot"></SparkDot>
}
