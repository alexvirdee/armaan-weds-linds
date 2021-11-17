import React from "react"
import FlowerVector from "../components/layout/Flower-vector";
import Navbar from "../components/layout/Navbar"
import Hero from "../components/Hero/Hero";
import Footer from "../components/layout/Footer";
// import RSVPForm from "../components/RSVP/RSVPForm";
// import BestFriends from "../components/BridesAndGrooms/BestFriends";
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
      <FlowerVector />
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}
