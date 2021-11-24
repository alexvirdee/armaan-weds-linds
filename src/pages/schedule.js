import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import { graphql } from "gatsby"
import "@fontsource/alex-brush"
import "@fontsource/eb-garamond"
import { createGlobalStyle } from "styled-components"
import ReactMarkdown from "react-markdown"
import { GatsbyImage } from "gatsby-plugin-image"
import dayjs from "dayjs"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const SchedulePlaceholder = () => {
  return (
    <div style={{ fontFamily: "Barlow Condensed", textAlign: "center" }}>
      Wedding planning is in the works. Please continue to refer to this website
      periodically for updates!
    </div>
  )
}

const Schedule = ({ data }) => {
  console.log("Schedule Data", data)

  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Title>Schedule</Title>
      <SchedulePlaceholder />
      {/* {data.event.nodes.map((item, index) => {
        return (
          <ScheduleContainer key={index}>
            <ScheduleLeft>
              <EventImage>
                <GatsbyImage
                  imgStyle={{ borderRadius: "50%", width: "225px" }}
                  layout={"constrained"}
                  placeholder={"blurred"}
                  image={item.image.gatsbyImageData}
                  alt="wedding-ceremony"
                />
              </EventImage>
              <EventWrapper>
                <Event>{item.event}</Event>
                <EventDate>{dayjs(item.date).format('MM/DD/YYYY')}</EventDate>
                <EventTime>{dayjs(item.date).format('h:mm A')}</EventTime>
              </EventWrapper>
            </ScheduleLeft>
            <ScheduleRight>
              <EventText>
                <ReactMarkdown>{item.eventInfo.eventInfo}</ReactMarkdown>
              </EventText>
            </ScheduleRight>
          </ScheduleContainer>
        )
      })} */}
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
  padding: 12px;
  font-family: "Eb Garamond";
  // border: 4px solid indigo;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ScheduleLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 100px;
  place-self: center;
  padding: 12px;
  // border: 2px dashed magenta;

  @media (max-width: 768px) {
    // border: 2px dashed blue;
  }
`

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const Event = styled.h1`
  align-self: flex-start;
  border-bottom: 2px solid grey;
  font-family: "Alex Brush";
`

const EventDate = styled.div``

const EventTime = styled.div``

const EventImage = styled.div`
  padding: 12px;
  max-width: 250px;
  // border: 4px solid peru;
`

const ScheduleRight = styled.div`
  padding: 12px;
  place-self: center;
  // border: 2px dashed green;

  @media (max-width: 768px) {
    padding: 35px;
  }
`

const EventText = styled.div``

export default Schedule

export const queery = graphql`
  query ScheduleQuery {
    event: allContentfulSchedule {
      nodes {
        image {
          gatsbyImageData
        }
        date
        event
        id
        eventInfo {
          eventInfo
        }
      }
    }
  }
`
