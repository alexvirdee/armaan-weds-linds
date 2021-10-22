import React from "react";
import { graphql } from "gatsby";

const GalleryItem = ({ data }) => {
    <div>
        <h1>{data.photo.image.title}</h1>
        <p>{data.photo.description}</p>
    </div>
}

export default GalleryItem;

export const pageQuery = graphql`
    query($slug: String!) {
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