import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/great-vibes"

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  font-family: "Great Vibes";
`

const ourStory = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Our Story</Title>
      </Container>
    </>
  )
}

export default ourStory
