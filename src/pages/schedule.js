import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"

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
      <Title>Schedule</Title>
      {/* <SchedulePlaceholder /> */}
      <ScheduleContainer>
        <ScheduleLeft>
            <Event>Left</Event>
        </ScheduleLeft>
        <ScheduleRight>
            <EventText>Right</EventText>
        </ScheduleRight>
      </ScheduleContainer>
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

export default Schedule
