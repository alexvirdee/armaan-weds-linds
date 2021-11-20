import React, { useEffect, useState } from "react"
import { getRemainingTimeUntilMsTimestamp } from "../Utils/CountdownTimerUtils"
import styled from "styled-components"
import "@fontsource/barlow-condensed"

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
}

const WeddingCountdown = ({ countdownTimeStampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimeStampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdownTimeStampMs])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <CountdownRow>
      <TimeContainer>
        <TimeOutput>{remainingTime.days}</TimeOutput>
        <TimeDuration>Days</TimeDuration>
      </TimeContainer>
      <TimeContainer>
        <TimeOutput>{remainingTime.hours}</TimeOutput>
        <TimeDuration>Hours</TimeDuration>
      </TimeContainer>
      <TimeContainer>
        <TimeOutput>{remainingTime.minutes}</TimeOutput>
        <TimeDuration>Minutes</TimeDuration>
      </TimeContainer>
      <TimeContainer>
        <TimeOutput>{remainingTime.seconds}</TimeOutput>
        <TimeDuration>Seconds</TimeDuration>
      </TimeContainer>
    </CountdownRow>
  )
}

const CountdownRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`

const TimeContainer = styled.div`
  padding: 20px 20px 20px 20px;
  padding-right: 8px;
  background-color: #fff;
  margin-right: 25px;
  font-family: "Barlow Condensed";
  font-size: 1.4rem;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`

const TimeOutput = styled.div`
  color: #fcb2a9;
  font-weight: bold;
  font-size: 2.6rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const TimeDuration = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`

export default WeddingCountdown
