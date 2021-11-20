import React from "react"
import Wave from "react-wavify"
import "@fontsource/barlow-condensed"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
         <Content>Website designed and built by Alex Virdee 👨‍💻</Content>
        <WaveContainer>
      <Wave
        fill="#fcb2a9"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
      </WaveContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`

const Content = styled.div`
    position: relative;
    top: 100px;
    font-family: "Barlow Condensed";
    font-size: 1.2rem;
    z-index: 9999;
`

const WaveContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    margin: 0;
    padding: 0;
`

export default Footer
