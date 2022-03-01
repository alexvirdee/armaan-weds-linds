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
      <MainContainer>
        <BridesMaids>
          <Title>Bridesmaids</Title>
          {data.bridesmaids.nodes.map((bridesmaid, index) => {
            return (
              <PersonContainer key={index}>
                <PersonWrap>
                  <Person>
                    <GatsbyImage
                      imgStyle={{
                        objectFit: "fill",
                        width: "215px",
                        height: "200px",
                        borderRadius: "50%",
                        border: "2px solid #fcb2a9",
                      }}
                      placeholder={"blurred"}
                      image={bridesmaid.image.gatsbyImageData}
                      alt="Bridesmaid"
                    />
                  </Person>
                </PersonWrap>
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
                <PersonWrap>
                  <Person>
                    <GatsbyImage
                      imgStyle={{
                        objectFit: "fill",
                        width: "215px",
                        height: "200px",
                        borderRadius: "50%",
                        border: "2px solid #000",
                      }}
                      placeholder={"blurred"}
                      image={groomsman.image.gatsbyImageData}
                      alt="Groomsman"
                    />
                  </Person>
                </PersonWrap>
                <PersonRole>{groomsman.text}</PersonRole>
                <PersonName>{groomsman.fullName}</PersonName>
              </PersonContainer>
            )
          })}
        </GroomsMen>
      </MainContainer>
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
  font-size: 3.2rem;
`
const SubTitle = styled.h3`
  font-family: "Eb Garamond";
  text-align: center;
  padding-bottom: 12px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: flex-row;
  justify-content: space-evenly;
  // border: 6px solid red;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const BridesMaids = styled.div`
  // border: 4px solid magenta;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
`

const Divider = styled.div`
  border-right: 2px solid lightgrey;

  @media (max-width: 768px) {
    border-bottom: 2px solid lightgrey;
    width: 100%;
  }
`

const GroomsMen = styled.div`
  // border: 4px solid blue;
  display: flex;
  flex-direction: column;

  // justify-content: space-between;
`

const PersonContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  padding: 12px;
  // border: 2px solid orange;
`

const PersonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15%;
`

const Person = styled.div`
  width: 315px;
  height: 14rem;
  // border: 8px solid magenta;
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
          gatsbyImageData(layout: FULL_WIDTH)
        }
        fullName
        text
        id
      }
    }
    groomsmen: allContentfulGroomsman {
      nodes {
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        fullName
        text
      }
    }
  }
`
