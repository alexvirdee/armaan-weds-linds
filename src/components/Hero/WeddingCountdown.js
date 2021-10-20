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

const DayOfWedding = () => {
  return (
    <div>
      <h3>We are married!</h3>
    </div>
  )
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
        <TimeText>{remainingTime.days}</TimeText>
        <div>Days</div>
      </TimeContainer>
      <TimeContainer>
        <TimeText>{remainingTime.hours}</TimeText>
        <div>Hours</div>
      </TimeContainer>
      <TimeContainer>
        <TimeText>{remainingTime.minutes}</TimeText>
        <div>Minutes</div>
      </TimeContainer>
      <TimeContainer>
        <TimeText>{remainingTime.seconds}</TimeText>
        <div>Seconds</div>
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
  background-color: #fff;
  margin-right: 25px;
  font-family: "Barlow Condensed";
  font-size: 1.1rem;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`

const TimeText = styled.div`
  color: #FCB2A9;
  font-weight: bold;
  font-size: 1.45rem;
`

export default WeddingCountdown
