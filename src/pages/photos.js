import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

const Photos = ({ data }) => {
  return (
    <>
      <Navbar />
      <Title>Photos</Title>
      <Gallery>
        {data.photo.nodes.map((item, index) => {
         return (
          <Link to={item.slug} key={index}>
            <GalleryImg image={item.image.gatsbyImageData} alt={item.slug} />
          </Link>
         ) 
        })}
      </Gallery>
    </>
  )
}

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
  padding-left: 15px;
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 0px;
  place-items: center;
`

const GalleryImg = styled(GatsbyImage)`
  max-width: 90%;
  height: auto;
  margin: 10px;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  :hover {
    -webkit-filter: brightness(95%);
    -webkit-transition: all 10ms ease;
    -moz-transition: all 10ms ease;
    -o-transition: all 10ms ease;
    -ms-transition: all 10ms ease;
    transition: all 10ms ease;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 768px) {
    margin-left: 25px;
  }
`

export default Photos

export const query = graphql`
  query PhotosQuery {
    photo: allContentfulGalleryPost {
      nodes {
          slug
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              )
          }
      }
    }
  }
`
