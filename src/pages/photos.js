import React, { useEffect } from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import { graphql, Link } from "gatsby"
import GalleryItem from "../templates/gallery-item"

const Photos = ({ data }) => {
  useEffect(() => {
    console.log("DATA: ", data)
  }, [data])

  return (
    <>
      <Navbar />
      <Title>Photos</Title>
      <Gallery>
      {data.photo.nodes.map(item => {
        return <Link to={item.slug}>
            <GalleryImg src={item.image.file.url} />
        </Link> 
      })}
      </Gallery>
    </>
  )
}

const Title = styled.h1`
  font-family: "Alex Brush";
`

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const GalleryImg = styled.img`
    width: 325px;
    height: auto;
    margin: 25px;
    box-sizing: border-box;
	display: block;
	padding: 10%;
	background: #F4F0EC;
	border: 8px solid #333;
	box-shadow: 0 0 0 50px rgba(232, 236, 241, 1) inset;

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
