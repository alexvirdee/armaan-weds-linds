import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"

const thingsTodo = () => {
  return (
    <>
      <Navbar />
      <Heading>
        <Title>Things to Do</Title>
      </Heading>
      <InformationWrap></InformationWrap>
    </>
  )
}

const Heading = styled.div`
  grid-area: Heading;
  border: 4px solid #000;
`

const Title = styled.h1`
  font-family: "Alex Brush";
`

const InformationWrap = styled.div`
  display: flex;
  height: 100vh;
  border: 4px dashed lightblue;
`

export default thingsTodo
