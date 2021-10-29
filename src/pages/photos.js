import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import { graphql, Link } from "gatsby"

const Photos = ({ data }) => {
  return (
    <>
      <Navbar />
      <Title>Photos</Title>
      <Gallery>
        {data.photo.nodes.map(item => {
          return (
            <Link to={item.slug}>
              <GalleryImg src={item.image.file.url} />
            </Link>
          )
        })}
      </Gallery>
    </>
  )
}

const Title = styled.h1`
  font-family: "Alex Brush";
  padding-left: 15px;
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0px;
  justify-items: center;
`

const GalleryImg = styled.img`
  max-width: 75%;
  height: auto;
  margin: 10px;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  animation: fade 1s ease-in;

  :hover {
    -webkit-filter: brightness(85%);
    -webkit-transition: all 10ms ease;
    -moz-transition: all 10ms ease;
    -o-transition: all 10ms ease;
    -ms-transition: all 10ms ease;
    transition: all 10ms ease;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`

export default Photos

export const query = graphql`
  query PhotosQuery {
    photo: allContentfulGalleryPost {
      nodes {
        image {
          file {
            url
          }
        }
        slug
      }
    }
  }
`
