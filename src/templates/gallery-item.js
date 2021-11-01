import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"
import { graphql } from "gatsby"

const GalleryItem = ({ data }) => {
  return (
    <>
      <Navbar />
      <ItemContainer>
        <TextDisplay>
          <Title>{data.photo.image.title}</Title>
          <SubTitle>{data.photo.description}</SubTitle>
        </TextDisplay>
        <ImgContainer>
          <FramedImg src={data.photo.image.file.url} />
        </ImgContainer>
      </ItemContainer>
    </>
  )
}

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  margin-top: 25px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const TextDisplay = styled.div`
  place-self: center;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  font-size: 4rem;
  text-align: center;
`
const SubTitle = styled.p`
  font-family: "Barlow Condensed";
  font-size: 1.5rem;
  text-align: center;
`

const ImgContainer = styled.div`
  padding: 10px;
  place-self: center;
`

const FramedImg = styled.img`
  width: 60%;
  height: auto;
  box-sizing: border-box;
  place-self: center;
  display: block;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 35px;
  }
`

export default GalleryItem

export const pageQuery = graphql`
  query ($slug: String!) {
    photo: contentfulGalleryPost(slug: { eq: $slug }) {
      slug
      image {
        title
        file {
          url
        }
      }
      description
    }
  }
`
