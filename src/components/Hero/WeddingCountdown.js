import React, { useEffect, useState } from "react"
import { getRemainingTimeUntilMsTimestamp } from "../Utils/CountdownTimerUtils"
import styled from "styled-components"

const CountdownRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`

const TimeContainer = styled.div`
  padding: 20px 20px 20px 20px;
  border: 2px solid #000;
  margin-right: 4px;
  box-shadow: 10px 10px 5px #ccc;
  -moz-box-shadow: 10px 10px 5px #ccc;
  -webkit-box-shadow: 10px 10px 5px #ccc;
  -khtml-box-shadow: 10px 10px 5px #ccc;
`

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
        <div>{remainingTime.days}</div>
        <div>Days</div>
      </TimeContainer>
      <TimeContainer>
        <div>{remainingTime.hours}</div>
        <div>Hours</div>
      </TimeContainer>
      <TimeContainer>
        <div>{remainingTime.minutes}</div>
        <div>Minutes</div>
      </TimeContainer>
      <TimeContainer>
        <div>{remainingTime.seconds}</div>
        <div>Seconds</div>
      </TimeContainer>
    </CountdownRow>
  )
}

export default WeddingCountdown
