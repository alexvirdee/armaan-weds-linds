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
          loading={"eager"}
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
  // background-color: #FFFFF8;
`

const ImageWrapper = styled.div`
  position: relative;

  animation: fade 2s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`

const TopTitle = styled.h3`
  font-family: "Alex Brush";
  font-size: 3.2rem;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  font-size: 4.5rem;
  left: 0;
  position: absolute;
  text-align: center;
  top: 25%;
  width: 100%;
  animation: fade 4.8s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }

  @media (max-width: 1300px) {
    top: 40%;
  }

  @media (max-width: 768px) {
    top: 20%;
    font-size: 48px;
    color: #fff;
  }

  @media (max-width: 500px) {
    top: 12%;
    font-size: 48px;
    color: #fff;
  }
`

const SubTitle = styled.h3`
  font-size: 24px;
  font-family: "Barlow Condensed";
  padding: 5px 25px 5px 25px; 
`

export default Hero
