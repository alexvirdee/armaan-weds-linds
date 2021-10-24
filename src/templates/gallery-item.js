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

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const TextDisplay = styled.div`
    align-self: center;
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
  display: flex;
  justify-content: center;
`

const FramedImg = styled.img`
  width: 50%;
  height: auto;
  box-sizing: border-box;
  display: block;
  padding: 2%;
  background: #f4f0ec;
  border: 8px solid #333;
  box-shadow: 0 0 0 50px rgba(232, 236, 241, 1) inset;

  @media (max-width: 768px) {
    width: 80%;
    align-self: center;
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
