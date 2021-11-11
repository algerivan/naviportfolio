import styled from 'styled-components'
//https://www.pngkey.com/png/full/936-9363326_banner-wave-monochrome.png

const Container = styled('div')`
  ${({ theme }) => `
    width: 100vw;
  `}
`

const WaveImg = styled('img')`
  ${({ theme }) => `
    width: 100vw;
    position: absolute;
    bottom: 50px;
    max-height: 20vh;
  `}
`

export default function WaveAnimation() {
  return (
    <Container>
      <WaveImg src="https://www.pngkey.com/png/full/936-9363326_banner-wave-monochrome.png"></WaveImg>
    </Container>
  )
}
