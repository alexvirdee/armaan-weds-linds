import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import WeddingCountdown from "./WeddingCountdown"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"


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
      <WeddingCountdown countdownTimeStampMs={1666454400000} />
      <TopTitle>We're Getting Married</TopTitle>
      <SubTitle>On October 22, 2022</SubTitle>
      <SubTitle>Cheeca Lodge 81801 Overseas Highway Islamorada, FL 33036</SubTitle>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
  background-color: #FFFFF8;
`

const ImageWrapper = styled.div`
  position: relative;
`

const TopTitle = styled.h3`
  font-family: "Alex Brush";
  font-size: 32px;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  font-size: 64px;
  left: 0;
  position: absolute;
  text-align: center;
  top: 35%;
  color: #fff;
  width: 100%;

  @media (max-width: 768px) {
    top: 45px;
    font-size: 48px;
  }

  @media (max-width: 1200px) {
    top: 80px;
  }
`

const SubTitle = styled.h3`
  font-size: 24px;
  font-family: "Barlow Condensed";
  padding: 5px 25px 5px 25px; 
`

export default Hero
