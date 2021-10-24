import React from "react"
import Navbar from "../components/layout/Navbar"
import Collapsible from "react-collapsible"
import styled from "styled-components"
import "@fontsource/barlow-condensed"

const FAQ = () => {
  return (
    <>
      <Navbar />
      <Title>FAQ</Title>
      <Accordion>
        <Collapsible trigger="Start here">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
      </Accordion>
    </>
  )
}

const Title = styled.h1`
  font-family: "Barlow Condensed";
  text-align: center;
`

const Accordion = styled.div``

export default FAQ
