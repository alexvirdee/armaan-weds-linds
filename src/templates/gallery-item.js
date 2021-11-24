import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

const GalleryItem = ({ data }) => {
  return (
    <>
      <Navbar />
      <ItemContainer>
        <TextDisplay>
          <Title>{data.photo.image.title}</Title>
          <SubTitle>{data.photo.description}</SubTitle>
          <Link to="/photos">
            <Button>All Photos</Button>
          </Link>
        </TextDisplay>
        <ImgContainer>
          <FramedImg image={data.photo.image.gatsbyImageData} alt={data.photo.image.title} />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Button = styled.button`
   padding: 0.3em 1.2em;
   margin: 1em 0.3em 0.3em 0;
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
   font-weight: 300;
   color: #ffffff;
   background-color: #000;
   text-align: center;
   transition: all 0.2s;
   align-self: center;
   cursor: pointer;

  :hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`

const ImgContainer = styled.div`
  padding: 10px;
  place-self: center;
`

const FramedImg = styled(GatsbyImage)`
  width: 65%;
  height: auto;
  box-sizing: border-box;
  place-self: center;
  display: block;
  padding: 2%;
  margin-left: 45px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    background-color: #aadaff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

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
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED 
        ) 
      }
      description
    }
  }
`
