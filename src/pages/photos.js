import React, { useEffect } from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"
import { graphql, Link } from "gatsby"

const Photos = ({ data }) => {
  useEffect(() => {
    console.log("DATA: ", data)
  }, [data])

  return (
    <>
      <Navbar />
      <Title>Photos</Title>
      {data.photo.nodes.map(item => {
        return <Link to={item.slug}>
            <img  src={item.image.file.url} />
        </Link> 
      })}
    </>
  )
}

const Title = styled.h1`
  font-family: "Alex Brush";
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
