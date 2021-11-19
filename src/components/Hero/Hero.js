import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import WeddingCountdown from "./WeddingCountdown"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImgWrapper>
        <StaticImage
          width={1600}
          height={1000}
          // layout={"fullWidth"}
          placeholder={"blurred"}
          loading={"eager"}
          src="../../images/hero.jpg"
          alt="hero"
        />
      </HeroImgWrapper>
      <Title>Armaan & Lindsay</Title>
      <WeddingCountdown countdownTimeStampMs={1666454400000} />
      <TopTitle>We're Getting Married</TopTitle>
      <CouplePortrait>
        <StaticImage
          imgStyle={{ borderRadius: "50%" }}
          layout={"constrained"}
          loading={"eager"}
          src="../../images/beau-ny.jpeg"
          alt={"couple portrait"}
          width={275}
          height={280}
        />
      </CouplePortrait>
      <SubTitle>October 22, 2022</SubTitle>
      <SubTitle>
        Cheeca Lodge 81801 Overseas Highway Islamorada, FL 33036
      </SubTitle>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`

const HeroImgWrapper = styled.div`
  position: relative;

  animation: fade 2s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`

const Title = styled.h1`
  font-family: "Alex Brush";
  font-size: 4.5rem;
  font-weight: 300;
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
    top: 35%;
    font-size: 48px;
    color: #fff;
  }

  @media (max-width: 500px) {
    top: 25%;
    font-size: 48px;
    color: #fff;
  }
`

const TopTitle = styled.h3`
  font-family: "Alex Brush";
  font-size: 3.2rem;
`

const CouplePortrait = styled.div`
  align-self: center;
  border-radius: 50%;
  animation: fade 2s ease-in;
  border: 2px solid #fcb2a9;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`

const SubTitle = styled.h3`
  font-size: 24px;
  font-family: "Barlow Condensed";
  padding: 5px 25px 5px 25px;
`

export default Hero
