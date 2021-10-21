import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"
import { createGlobalStyle } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const ourStory = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Title>Our Story</Title>
        <StaticImage width={300} src="../images/leaf-divider.png" />
        <StoryText>
          It all began on a flight to NYC. Lindsay sat next to Brooke who
          happened to be one of Armaan’s childhood friends. The two sparked
          conversation discussing all sorts of things which included boysss.
          During their talk Brooke thought it would be a great idea to introduce
          Lindsay to Armaan. Lindsay thought, “why not?”. After landing at
          Newark Airport, Brooke sent Armaan a text that pretty much read “met a
          beautiful Indian girl, you need to take her out on a date”. She then
          sent Lindsay’s instagram pictures to Armaan like any millennial would
          do. Armaan was intrigued to say the least. When Lindsay received her
          first few texts from Armaan she had a feeling this relationship would
          turn into something beautiful. And that it did. The two went on their
          first date at a restaurant called Aria in Hell’s Kitchen. Armaan wined
          and dined Lindsay. The next day he spoke to his best friend, Jay and
          said, “I am going to make her my wife one day”. The two have been
          inseparable since that night at Aria. They have survived living in a 1
          bedroom apartment during the Pandemic together and are now parents to
          a beautiful Turkish Golden Retriever. They are so very excited to
          become husband and wife and cannot wait to have their nearest and
          dearest celebrate with them! (ROUGH DRAFT, NOT DONE)
        </StoryText>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-family: "Alex Brush";
`

const StoryText = styled.div`
  font-family: "Barlow Condensed";
  padding: 35px;
  width: 65%;
  color: #989ca0;
  text-align: center;
  animation: fade 1s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`

export default ourStory
