import React, { useEffect, useState, useCallback } from "react"
import styled, { keyframes } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import WeddingCountdown from "./WeddingCountdown"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"

function blinkingEffect() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `
}

const actions = [
  "Our Golden Beau is very excited!",
  "We can't wait to celebrate",
  "We're Getting Married!",
]

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL_MIN = 80
const TYPING_INTERVAL_MAX = 150
const PAUSE_MS = 1000
const DELETING_INTERVAL = 50

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) +
  TYPING_INTERVAL_MIN

const useTypedAction = actions => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(Phase.Typing)
  const [typedAction, setTypedAction] = useState("")

  const resume = useCallback(() => {
    if (phase !== Phase.Pausing) return
    setPhase(Phase.Deleting)
  }, [phase])

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedAction = actions[selectedIndex].slice(
          0,
          typedAction.length + 1
        )

        if (nextTypedAction === typedAction) {
          setPhase(Phase.Pausing)
        }

        const timeout = setTimeout(() => {
          setTypedAction(nextTypedAction)
        }, getRandomTypingInterval())

        return () => {
          clearTimeout(timeout)
        }
      }

      case Phase.Deleting: {
        if (!typedAction) {
          const nextIndex = selectedIndex + 1
          setSelectedIndex(actions[nextIndex] ? nextIndex : 0)
          setPhase(Phase.Typing)
          return
        }

        const nextRemaining = actions[selectedIndex].slice(
          0,
          typedAction.length - 1
        )

        const timeout = setTimeout(() => {
          setTypedAction(nextRemaining)
        }, DELETING_INTERVAL)

        return () => {
          clearTimeout(timeout)
        }
      }

      case Phase.Pausing: {
        const nextIndex = selectedIndex + 1;
        if (!actions[nextIndex]) return
      }

      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting)
        }, PAUSE_MS)
        return () => {
          clearTimeout(timeout)
        }
    }
  }, [actions, selectedIndex, typedAction, phase, resume])

  return typedAction 
}

const Hero = () => {
  const action = useTypedAction(actions)
  return (
    <HeroContainer>
      <HeroImgWrapper>
        <StaticImage
          width={1600}
          height={1000}
          loading={"eager"}
          src="../../images/hero.jpg"
          alt="hero"
        />
      </HeroImgWrapper>
      <Title>Armaan & Lindsay</Title>
      <WeddingCountdown countdownTimeStampMs={1666454400000} />
      <WeddingTitle>{action}</WeddingTitle>
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

const WeddingTitle = styled.h3`
  font-family: "Alex Brush";
  font-size: 3.2rem;

  :after {
    color: lightgrey;
    padding-left: 1px;
    content: "|";
    animation: ${blinkingEffect} 1s step-start infinite;
  }

  @media (max-width: 500px) {
    font-size: 2.4rem;
  }
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
  padding: 10px 25px 5px 25px;
`

export default Hero
