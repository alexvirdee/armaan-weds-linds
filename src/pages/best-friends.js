import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import "@fontsource/alex-brush"
import "@fontsource/eb-garamond"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const BestFriends = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Heading>
        <ImgWrapper>
          <StaticImage
            layout={"constrained"}
            placeholder={"blurred"}
            src={"../images/elephant-heart-right.png"}
            alt="elephant"
          />
        </ImgWrapper>
        <Title>Wedding Party</Title>
        <ImgWrapper>
          <StaticImage
            layout={"constrained"}
            placeholder={"blurred"}
            src={"../images/elephant-heart.png"}
            alt="elephant"
          />
        </ImgWrapper>
      </Heading>
      <SubTitle>
        We couldn't say I do without our best friends by our side
      </SubTitle>
      <BestFriendsContainer>
        <BridesMaids>
          <Title>Bridesmaids</Title>
          {data.bridesmaids.nodes.map((bridesmaid, index) => {
            return (
              <PersonContainer key={index}>
                <Person>
                  <GatsbyImage
                    imgStyle={{
                      width: "175px",
                      height: "145px",
                      borderRadius: "50%",
                      border: "2px solid #fcb2a9",
                    }}
                    placeholder={"blurred"}
                    image={bridesmaid.image.gatsbyImageData}
                    alt=""
                  />
                </Person>
                <PersonRole>{bridesmaid.text}</PersonRole>
                <PersonName>{bridesmaid.fullName}</PersonName>
              </PersonContainer>
            )
          })}
        </BridesMaids>
        <Divider />
        <GroomsMen>
          <Title>Groomsmen</Title>
          {data.groomsmen.nodes.map((groomsman, index) => {
            return (
              <PersonContainer key={index}>
                <Person>
                  <GatsbyImage
                    imgStyle={{
                      width: "175px",
                      height: "145px",
                      borderRadius: "50%",
                      border: "2px solid #000",
                    }}
                    placeholder={"blurred"}
                    image={groomsman.image.gatsbyImageData}
                    alt=""
                  />
                </Person>
                <PersonRole>{groomsman.text}</PersonRole>
                <PersonName>{groomsman.fullName}</PersonName>
              </PersonContainer>
            )
          })}
        </GroomsMen>
      </BestFriendsContainer>
    </>
  )
}

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px;
`

const ImgWrapper = styled.div`
  width: 100px;
  height: auto;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
`
const SubTitle = styled.h3`
  font-family: "Eb Garamond";
  text-align: center;
  padding-bottom: 12px;
`

const BestFriendsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const BridesMaids = styled.div`
  display: flex;
  flex-direction: column;
`

const Divider = styled.div`
  border-right: 2px solid lightgrey;

  @media (max-width: 768px) {
    border-bottom: 2px solid lightgrey;
    width: 100%;
  }
`

const GroomsMen = styled.div`
  display: flex;
  flex-direction: column;
`

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 12px;
`

const Person = styled.div`
  width: 200px;
  height: auto;
  padding: 18px;
`

const PersonName = styled.div`
  font-family: "Eb Garamond";
  text-align: center;
  font-size: 1.2rem;
`

const PersonRole = styled.div`
  font-family: "Eb Garamond";
  text-align: center;
  font-size: 1rem;
  color: grey;
  margin-bottom: 5px;
`

export default BestFriends

export const query = graphql`
  query BestFriendsQuery {
    bridesmaids: allContentfulBridesmaid {
      nodes {
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
        fullName
        text
      }
    }
    groomsmen: allContentfulGroomsman {
      nodes {
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
        fullName
        text
      }
    }
  }
`
