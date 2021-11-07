import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const data = [
  {
    id: 1,
    event: "Sangeet",
    date: "October 21, 2022",
    time: "7pm",
    eventInfo: "Sangeet information here",
  },
  {
    id: 2,
    event: "Ceremony",
    date: "October 22, 2022",
    time: "10AM",
    eventInfo: "Ceremony information here",
  },
]

const SchedulePlaceholder = () => {
  return (
    <div style={{ fontFamily: "Barlow Condensed", textAlign: "center" }}>
      Wedding planning is in the works. Please continue to refer to this website
      periodically for updates!
    </div>
  )
}

const Schedule = () => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {/* <Title>Schedule</Title> */}
      {/* <SchedulePlaceholder /> */}
      {/* <ScheduleContainer> */}
      {/* <ScheduleLeft>
            <Event>Left</Event>
        </ScheduleLeft>
        <ScheduleRight>
            <EventText>Right</EventText>
        </ScheduleRight> */}
      <Landscape>
        <Mountain></Mountain>
        <Mountain2></Mountain2>
        <Mountain3></Mountain3>
        <SunContainer1></SunContainer1>
        <SunContainer>
          <Sun></Sun>
        </SunContainer>
        <Cloud></Cloud>
        <Cloud1></Cloud1>
        <SunContainer2>
          <Sun></Sun>
        </SunContainer2>
        <Light></Light>
        <Light1></Light1>
        <Light2></Light2>
        <Light3></Light3>
        <Light4></Light4>
        <Light5></Light5>
        <Light6></Light6>
        <Light7></Light7>
        <Water></Water>
        <Splash></Splash>
        <SplashDelay1></SplashDelay1>
        <SplashDelay1></SplashDelay1>
        <SplashDelay1></SplashDelay1>
        <div className="splash splash-stone delay-3"></div>
        <div className="splash splash-stone splash-4"></div>
        <div className="splash splash-stone splash-5"></div>
        <div className="lotus lotus-1"></div>
        <div className="lotus lotus-2"></div>
        <div className="lotus lotus-3"></div>
        <div className="trash-container"></div>
        <Front>
          <div className="stone"></div>
          <div className="grass"></div>
          <div className="grass grass-1"></div>
          <div className="grass grass-2"></div>
          <Reed></Reed>
          <div className="reed reed-1"></div>
        </Front>
      </Landscape>
      {/* </ScheduleContainer> */}
    </>
  )
}

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
`

const ScheduleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  border: 4px solid indigo;
  justify-content: center;
  align-content: center;
`

const ScheduleLeft = styled.div`
  border: 2px dashed magenta;
`

const Event = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 35px;
`

const ScheduleRight = styled.div`
  border: 2px dashed green;
`

const EventText = styled.div`
  padding-left: 35px;
`

// :root {
//   --v1: #be91c6;
//   --v2: #8a65cc;
//   --v3: #5e30d9;
//   --transparentv3: #5e30d900;
//   --v4: #3b1895;
//   --s1: #fea798;
//   --s2: #ff846e;
//   --cloud: #fea798;
// }

const Landscape = styled.div`
  :after, :before: *, *:after, *:before {
    position: absolute;
  }

  height: 100vh;
  background-image: linear-gradient(#be91c6, #fea798, #be91c6);
  position: relative;
  z-index: 1;
  overflow: hidden;
`

const Mountain = styled.div`
  border-radius: 180% 80% 0% 0%/60vmin 60vmin 0% 0%;
  width: 40vmin;
  height: 30vmin;
  bottom: 50%;
  left: -10vmin;
  background: #fea798;
  background-image: linear-gradient(#be91c6, #8a65cc 30%, #5e30d9);
  box-shadow: inset -10px 0 10px -10px #fea798;

  :before {
    content: "";
    bottom: 0;
    width: inherit;
    height: inherit;
    background: inherit;
    border-radius: inherit;
    transform-origin: bottom center;
    transform: scaleX(1) scaleY(-0.6);
    filter: blur(3px);
  }
`

const Mountain2 = styled.div`
  border-radius: 180% 80% 0% 0%/60vmin 60vmin 0% 0%;
  bottom: 50%;
  background: #fea798;
  background-image: linear-gradient(#be91c6, #8a65cc 30%, #5e30d9);
  box-shadow: inset -10px 0 10px -10px #fea798;

  left: 5vmin;
  height: 15vmin;
  width: 40vmin;
  box-shadow: inset -15px 0 10px -14px #fea798;
  border-radius: 120% 50% 0% 0%/25vmin 25vmin 0% 0%;
  background-image: linear-gradient(#5e30d9, #3b1895);

  :before {
    content: "";
    bottom: 0;
    width: inherit;
    height: inherit;
    background: inherit;
    border-radius: inherit;
    transform-origin: bottom center;
    transform: scaleX(1) scaleY(-0.6);
    filter: blur(3px);
  }
`

const Mountain3 = styled.div`
  bottom: 50%;
  background: #fea798;
  background-image: linear-gradient(#be91c6, #8a65cc 30%, #5e30d9);
  box-shadow: inset -10px 0 10px -10px #fea798;

  border-radius: 80% 0% 0 0/100% 100% 0 0;
  right: -85vmin;
  width: 100vmin;
  left: auto;
  height: 12vmin;

  :before {
    content: "";
    bottom: 0;
    width: inherit;
    height: inherit;
    background: inherit;
    border-radius: inherit;
    transform-origin: bottom center;
    transform: scaleX(1) scaleY(-0.6);
    filter: blur(3px);
  }

  :after {
    content: "";
    border-radius: 60% 0 0 0/100% 0 0 0;
    background: inherit;
    width: 100%;
    height: 0;
    bottom: 0;
    right: 20%;
  }
`

const Front = styled.div`
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
`

const SunContainer1 = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50%;

  :after {
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: radial-gradient(circle at 60% 100%, #ff846e, transparent);
    -webkit-animation: fade 20s infinite;
    animation: fade 20s infinite;
    mix-blend-mode: color-burn;
  }

  @-webkit-keyframes fade {
    10% {
      opacity: 1;
    }
    30%,
    70% {
      opacity: 0;
    }
  }

  @keyframes fade {
    10% {
      opacity: 1;
    }
    30%,
    70% {
      opacity: 0;
    }
  }
`

const SunContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50%;
`

const Sun = styled.div`
  background: white;
  border-radius: 50%;
  width: 20vmin;
  height: 20vmin;
  left: calc(60% - 10vmin);
  top: 100%;
  transform: translate3d(0, 0, 0);
  -webkit-animation: rise 20s infinite;
  animation: rise 20s infinite;
  box-shadow: 0 0 10px white;
`

const Cloud = styled.div`
  width: 80vmin;
  height: 6vmin;
  background: currentcolor;
  color: #fea798;
  top: 24vmin;
  left: 20vmin;
  border-radius: 50%;
  box-shadow: 30vmin 0.5vmin 0 -1vmin currentcolor,
    -25vmin 0 0 -0.6vmin currentcolor;
  opacity: 0.3;
  transform: translate3d(-150vmin, 0, 0);
  -webkit-animation: clouds 120s infinite;
  animation: clouds 120s infinite;
  -webkit-animation-delay: -10s;
  animation-delay: -10s;

  @-webkit-keyframes clouds {
    50% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(150vmin, 0, 0);
    }
  }

  @keyframes clouds {
    50% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(150vmin, 0, 0);
    }
  }
`

const Cloud1 = styled.div`
  width: 80vmin;
  height: 6vmin;
  background: currentcolor;
  color: #fea798;
  left: 60vmin;
  top: 15vmin;
  opacity: 0.2;
  filter: blur(1px);
  -webkit-animation-delay: 0;
  animation-delay: 0;
  -webkit-animation-duration: 100s;
  animation-duration: 100s;
  border-radius: 50%;
  box-shadow: 30vmin 0.5vmin 0 -1vmin currentcolor,
    -25vmin 0 0 -0.6vmin currentcolor;
  opacity: 0.3;
  transform: translate3d(-150vmin, 0, 0);
  -webkit-animation: clouds 120s infinite;
  animation: clouds 120s infinite;
  -webkit-animation-delay: -10s;
  animation-delay: -10s;

  @-webkit-keyframes clouds {
    50% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(150vmin, 0, 0);
    }
  }

  @keyframes clouds {
    50% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(150vmin, 0, 0);
    }
  }
`

const SunContainer2 = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50%;

  :after {
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: radial-gradient(circle at 60% 100%, #ff846e, transparent);
    -webkit-animation: fade 20s infinite;
    animation: fade 20s infinite;
    mix-blend-mode: color-burn;
  }

  @-webkit-keyframes fade {
    10% {
      opacity: 1;
    }
    30%,
    70% {
      opacity: 0;
    }
  }

  @keyframes fade {
    10% {
      opacity: 1;
    }
    30%,
    70% {
      opacity: 0;
    }
  }

  top: 50%;
  background: radial-gradient(circle at 60% 0%, #ff846e, transparent);

  background: linear-gradient(white, rgba(255, 255, 255, 0));
  box-shadow: none;
  filter: blur(5px);
  opacity: 1;
  top: 0;
  transform: translate3d(0, -20vmin, 0);
  -webkit-animation-name: rise-reflection;
  animation-name: rise-reflection;

  @-webkit-keyframes rise-reflection {
    30% {
      opacity: 0;
      transform: translate3d(0, 5vmin, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 80vmin, 0);
    }
  }
  @keyframes rise-reflection {
    30% {
      opacity: 0;
      transform: translate3d(0, 5vmin, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 80vmin, 0);
    }
  }
`

const Light = styled.div`
  height: 0.5vmin;
  width: 20vmin;
  background: white;
  left: 20%;
  right: 0;
  margin: auto;
  top: calc(50% + 1vmin);
  -webkit-animation: light 20s infinite;
  animation: light 20s infinite;
  opacity: 0;
  transform: scaleX(0.1) translate3d(0%, 0, 0);
  border-radius: 0.25vh;
  filter: blur(1px);

  @-webkit-keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
  @keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
`

const Light1 = styled.div`
  height: 0.5vmin;
  width: 20vmin;
  background: white;
  left: 20%;
  right: 0;
  margin: auto;
  top: calc(50% + 2vmin);
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  animation: light 20s infinite;
  opacity: 0;
  transform: scaleX(0.1) translate3d(0%, 0, 0);
  border-radius: 0.25vh;
  filter: blur(1px);

  @-webkit-keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
  @keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
`

const Light2 = styled.div`
  height: 0.5vmin;
  width: 20vmin;
  background: white;
  left: 20%;
  right: 0;
  margin: auto;
  top: calc(50% + 3vmin);
  width: 18vmin;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  animation-delay: 0.5s;
  animation: light 20s infinite;
  opacity: 0;
  transform: scaleX(0.1) translate3d(0%, 0, 0);
  border-radius: 0.25vh;
  filter: blur(1px);

  @-webkit-keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
  @keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
`

const Light3 = styled.div`
  height: 0.5vmin;
  width: 20vmin;
  background: white;
  left: 20%;
  right: 0;
  margin: auto;
  top: calc(50% + 4vmin);
  width: 18vmin;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
  width: 18vmin;
  animation: light 20s infinite;
  opacity: 0;
  transform: scaleX(0.1) translate3d(0%, 0, 0);
  border-radius: 0.25vh;
  filter: blur(1px);

  @-webkit-keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
  @keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
`

const Light4 = styled.div`
  height: 0.5vmin;
  width: 20vmin;
  background: white;
  left: 20%;
  right: 0;
  margin: auto;
  top: calc(50% + 5vmin);
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  width: 18vmin;
  animation: light 20s infinite;
  opacity: 0;
  transform: scaleX(0.1) translate3d(0%, 0, 0);
  border-radius: 0.25vh;
  filter: blur(1px);

  @-webkit-keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
  @keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
`

const Light5 = styled.div`
  height: 0.5vmin;
  width: 20vmin;
  background: white;
  left: 20%;
  right: 0;
  margin: auto;
  top: calc(50% + 8vmin);
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
  width: 18vmin;
  animation: light 20s infinite;
  opacity: 0;
  transform: scaleX(0.1) translate3d(0%, 0, 0);
  border-radius: 0.25vh;
  filter: blur(1px);

  @-webkit-keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
  @keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
`

const Light6 = styled.div`
  height: 0.5vmin;
  width: 20vmin;
  background: white;
  left: 20%;
  right: 0;
  margin: auto;
  top: calc(50% + 9vmin);
  width: 10vmin;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
  width: 18vmin;
  animation: light 20s infinite;
  opacity: 0;
  transform: scaleX(0.1) translate3d(0%, 0, 0);
  border-radius: 0.25vh;
  filter: blur(1px);

  @-webkit-keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
  @keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
`

const Light7 = styled.div`
  height: 0.5vmin;
  width: 20vmin;
  background: white;
  left: 20%;
  right: 0;
  margin: auto;
  top: calc(50% + 7vmin);
  width: 12vmin;
  -webkit-animation-delay: 3.5s;
  animation-delay: 3.5s;
  width: 18vmin;
  animation: light 20s infinite;
  opacity: 0;
  transform: scaleX(0.1) translate3d(0%, 0, 0);
  border-radius: 0.25vh;
  filter: blur(1px);

  @-webkit-keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
  @keyframes light {
    5% {
      opacity: 1;
      transform: scaleX(1);
    }
    10% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(5%, 0, 0);
    }
    15% {
      opacity: 0.6;
      transform: scaleX(1) translate3d(-5%, 0, 0);
    }
    20% {
      opacity: 0;
      transform: scaleX(0.1) translate3d(0, 0, 0);
    }
  }
`

const Water = styled.div`
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(#fea79855, #8a65cc);
  overflow: hidden;
  box-shadow: inset 0 1px 4px -3px white;
  border: 4px solid green;
`

const Splash = styled.div`
  width: 8vmin;
  height: 3vmin;
  border: 2px solid #fea798;
  box-shadow: 0 0 2px #fea798;
  border-radius: 50%;
  bottom: 5vmin;
  left: 70%;
  -webkit-animation: splash 9s infinite;
  animation: splash 9s infinite;
  transform: scale(0);

  @-webkit-keyframes splash {
    50%, 100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  
  @keyframes splash {
    50%, 100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`

const SplashDelay1 = styled.div`
width: 8vmin;
height: 3vmin;
border: 2px solid #fea798;
box-shadow: 0 0 2px #fea798;
border-radius: 50%;
bottom: 5vmin;
left: 70%;
-webkit-animation: splash 9s infinite;
-webkit-animation-delay: 1s;
animation-delay: 1s;
animation: splash 9s infinite;
transform: scale(0);

@-webkit-keyframes splash {
  50%, 100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes splash {
  50%, 100% {
    transform: scale(1);
    opacity: 0;
  }
}
`

const Reed = styled.div`
  height: 40vmin;
  width: 0.5vmin;
  bottom: 0;
  left: 10vmin;
  color: #3b1895;
  background: currentColor;
  transform-origin: bottom center;
  transform: rotate(4deg);
  box-shadow: inset -1px 0 0 #ff846e, -6vmin 3vmin 0 0, 80vmin 0 0 0;
  -webkit-animation: verticalise 20s infinite;
  animation: verticalise 20s infinite;
`

export default Schedule
