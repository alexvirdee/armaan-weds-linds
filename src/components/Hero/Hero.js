import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import WeddingCountdown from "./WeddingCountdown"
import "@fontsource/great-vibes"

const HeroContainer = styled.div`
  height: 100vh;
  text-align: center;
  margin-bottom: 25px;
  background-color: #F7F7F7;
  padding-bottom: 45px;
`

const ImageWrapper = styled.div`
  position: relative;
`

const TopTitle = styled.h3`
  font-family: "Great Vibes";
  font-size: 32px;
`

const Title = styled.h1`
  font-family: "Great Vibes";
  font-size: 64px;
  left: 0;
  position: absolute;
  text-align: center;
  top: 35%;
  color: #fff;
  width: 100%;

  @media (max-width: 768px) {
    top: 45px;
  }

  @media (max-width: 1200px) {
    top: 80px;
  }
`

const SubTitle = styled.h3`
  font-size: 24px;
`

const Hero = () => {
  return (
    <HeroContainer>
      <ImageWrapper>
        <StaticImage
          layout={"fullWidth"}
          src="../../images/hero-test.jpg"
          alt="hero"
        />
      </ImageWrapper>
      <Title>Armaan & Lindsay</Title>
      <WeddingCountdown countdownTimeStampMs={1666281600000} />
      <TopTitle>We're Getting Married</TopTitle>
      <SubTitle>On October 22, 2022</SubTitle>
    </HeroContainer>
  )
}

export default Hero
