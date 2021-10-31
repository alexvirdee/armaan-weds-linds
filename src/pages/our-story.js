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

const OurStory = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Title>Our Story</Title>
        {/* <StaticImage width={300} src="../images/leaf-divider.png" alt="leaf divider" /> */}
        <Card>
          <CardLeft>
            <StaticImage
              layout={"fullWidth"}
              src="../images/plane-heart.svg"
              alt="Plane Heart"
            />
          </CardLeft>
          <CardRight>
            <StoryText>
              <p>It all began on a flight to NYC. Lindsay sat next to Brooke who
              happened to be one of Armaan’s childhood friends. The two sparked
              conversation discussing all sorts of things which included boysss.</p>
              <p>During their talk Brooke thought it would be a great idea to
              introduce Lindsay to Armaan. Lindsay thought, “why not?”. After
              landing at Newark Airport, Brooke sent Armaan a text that pretty
              much read “met a beautiful Indian girl, you need to take her out
              on a date”. She then sent Lindsay’s instagram pictures to Armaan
              like any millennial would do. Armaan was intrigued to say the
              least.</p> <p>When Lindsay received her first few texts from Armaan she
              had a feeling this relationship would turn into something
              beautiful. And that it did. The two went on their first date at a
              restaurant called Aria in Hell’s Kitchen. Armaan wined and dined
              Lindsay. The next day he spoke to his best friend, Jay and said,
              “I am going to make her my wife one day”. The two have been
              inseparable since that night at Aria.</p> <p>They have survived living in
              a 1 bedroom apartment during the Pandemic together and are now
              parents to a beautiful Turkish Golden Retriever. They are so very
              excited to become husband and wife and cannot wait to have their
              nearest and dearest celebrate with them! (ROUGH DRAFT, NOT DONE)</p>
            </StoryText>
          </CardRight>
        </Card>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: "Alex Brush";
`

const Card = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-gap: 0.2rem;
  width: 75%;
  height: 500px;
  margin-bottom: 25px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.35);
  animation: fade 1s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    height: 750px;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
`

const CardLeft = styled.div`
  border-right: 2px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  background-color: #a5ddf0;

  @media (max-width: 1200px) {
    border: none;
    margin: 0;
    height: 300px;
  }
`

const CardRight = styled.div`
  overflow-y: auto;
`

const StoryText = styled.div`
  font-family: "Barlow Condensed";
  font-size: 1.2rem;
  padding: 45px;
  color: #989ca0;
`

export default OurStory
