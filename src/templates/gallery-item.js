import React, { useEffect } from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"
import { graphql } from "gatsby"

const GalleryItem = ({ data }) => {
  useEffect(() => {
    console.log("DATA: ", data)
  }, [])
  //
  return (
    <>
      <Navbar />
        <Title>{data.photo.image.title}</Title>
        <SubTitle>{data.photo.description}</SubTitle>
      <ImgContainer>
        <FramedImg src={data.photo.image.file.url} />
      </ImgContainer>
    </>
  )
}

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
`
const SubTitle = styled.p`
  font-family: "Barlow Condensed";
  text-align: center;
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FramedImg = styled.img`
  width: 50%;
  height: auto;
  box-sizing: border-box;
  display: block;
  padding: 4%;
  background: #f4f0ec;
  border: 8px solid #333;
  box-shadow: 0 0 0 50px rgba(232, 236, 241, 1) inset;
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
