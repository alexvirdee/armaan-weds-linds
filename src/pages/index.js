import React from "react"
import Navbar from "../components/layout/Navbar"
import Hero from "../components/Hero/Hero";
import Bridesmaids from "../components/BridesAndGrooms/Bridesmaids";
import Groomsmen from "../components/BridesAndGrooms/Groomsmen";
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
      <Bridesmaids />
      <Groomsmen />
    </>
  )
}
