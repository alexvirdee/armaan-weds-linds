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
    <div style={{ fontFamily: "Eb Garamond", textAlign: "center" }}>
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
      {/* <SchedulePlaceholder /> */}
      {data.event.nodes.reverse().map((item, index) => {
        console.log(item)
        return (
          <ScheduleContainer key={index}>
            <ScheduleLeft>
              <EventWrapper>
                {item.image ? (
                  <EventImage>
                    <GatsbyImage
                      placeholder={"blurred"}
                      imgStyle={{ borderRadius: "50%" }}
                      image={item.image.gatsbyImageData}
                      alt="wedding-ceremony"
                    />
                  </EventImage>
                ) : null}
                <EventInfoContainer>
                  <Event>{item.event}</Event>
                  <EventDate>{dayjs(item.date).format("MM/DD/YYYY")}</EventDate>
                  <EventTime>{dayjs(item.date).format("h:mm A")}</EventTime>
                </EventInfoContainer>
              </EventWrapper>
            </ScheduleLeft>
            <ScheduleRight>
              <EventText>
                <ReactMarkdown>{item.eventInfo.eventInfo}</ReactMarkdown>
              </EventText>
            </ScheduleRight>
          </ScheduleContainer>
        )
      })}
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
  margin: 25px;
  border-bottom: 1px solid lightgray;
  // border: 4px solid indigo;

  :last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ScheduleLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 12px;
  // border: 2px dashed magenta;

  @media (max-width: 768px) {
    // border: 2px dashed blue;
  }
`

const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
  // border: 4px solid red;

  @media (max-width: 768px) {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    // border: 4px solid magenta;
  }
`
const EventImage = styled.div`
  max-width: 250px;
  max-height: 300px;
  align-self: center;
  padding: 12px;
  margin: 4px;
  // border: 4px solid yellow;

  @media (max-width: 768px) {
    // border: 2px solid yellow;
  }
`

const EventInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 25px;
  // border: 2px dashed magenta;
`

const Event = styled.h1`
  text-align: center;
  border-bottom: 2px solid grey;
  font-family: "Alex Brush";
`

const EventDate = styled.div``

const EventTime = styled.div``

const ScheduleRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-tems: center;
  padding: 12px;
  // border: 2px dashed green;

  @media (max-width: 768px) {
    padding: 4px;
    margin-bottom: 12px;
    text-align: center;
    // border: 2px dashed green;
  }
`

const EventText = styled.div``

export default Schedule

export const queery = graphql`
  query ScheduleQuery {
    event: allContentfulSchedule {
      nodes {
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 400, height: 350)
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
