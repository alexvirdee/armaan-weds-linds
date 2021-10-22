import React, { useEffect } from "react"
import Navbar from "../components/layout/Navbar";
import { graphql } from "gatsby"

const GalleryItem = ({ data }) => {
  useEffect(() => {
    console.log("DATA: ", data)
  }, [])
  //
  return (
    <>
      <Navbar />
      <h1>{data.photo.image.title}</h1>
      <p>{data.photo.description}</p>
      <img src={data.photo.image.file.url} />
    </>
  )
}

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
