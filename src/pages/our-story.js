import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import "@fontsource/eb-garamond"
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
        <Card>
          <CardLeft>
            <StaticImage
              layout={"fullWidth"}
              placeholder="blurred"
              src="../images/plane-heart.svg"
              alt="Plane Heart"
            />
          </CardLeft>
          <CardRight>
            <Title>Our Story</Title>
            <StoryText>
              <p>
                Lindsay and Armaan’s love story started on a flight from Ft
                Lauderdale to New York City. Lindsay had the AMAZING fortune of
                sitting next to the person that would change her life forever…
              </p>
              <p>
                That person was the one and only, Brooke! What happens when you
                put two bubbly young ladies in seats 20A and 20B? Well, the
                lucky soul in 20C is kept awake by their unending conversation!
                And after discussing their favorite things about David Yurman
                and NYC brunches, that conversation turned to the most important
                topic of all - boys. When Lindsay mentioned that she was newly
                single, Brooke finally saw the opportunity to become the
                matchmaker she always knew she could be. Brooke happened to know
                a very handsome, charming, witty, and eligible bachelor named
                Armaan.
              </p>
              <p>
                With Lindsay’s permission, Brooke texted Armaan that she had a
                girl that she wanted him to meet. Playing the perfect
                matchmaker, Brooke sent him a few pictures from Lindsay’s
                Instagram, it would be an understatement to say he was
                interested. When Lindsay received her first few texts from
                Armaan, she instantly had a feeling it would turn into something
                beautiful. And that it did. The two went on their first date to
                a wine bar in NYC two weeks later, and have been inseparable
                ever since. They’ve travelled together, survived living in a
                1-bedroom apartment all through the pandemic, and are now
                parents to a beautiful golden retriever named Beau! Now, as they
                take their next step into marriage, they want to share it with
                you, the people that matter most to them. Time to celebrate!!!
              </p>
            </StoryText>
          </CardRight>
        </Card>
        <OurStoryImage>
          <StaticImage
            layout={"fullWidth"}
            placeholder="blurred"
            src="../images/grand-central.jpg"
            alt="grand-central"
          />
        </OurStoryImage>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
`

const Card = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-gap: 0.2rem;
  height: 80%;
  animation: fade 1s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

const CardLeft = styled.div`
  border-right: 2px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;

  @media (max-width: 1200px) {
    border: none;
  }
`

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`

const StoryText = styled.div`
  font-family: "Eb Garamond";
  font-size: 1.2rem;
  padding: 5px 25px;
  color: #989ca0;
`

const OurStoryImage = styled.div`
  width: 100%;
`

export default OurStory
