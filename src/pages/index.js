import React from "react"
import Navbar from "../components/layout/Navbar"
import Hero from "../components/Hero/Hero";
import Divider from "../components/layout/Divider";
import RSVPForm from "../components/RSVP/RSVPForm";
import BestFriends from "../components/BridesAndGrooms/BestFriends";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Divider />
      <BestFriends />
      {/* <RSVPForm /> */}
    </>
  )
}
