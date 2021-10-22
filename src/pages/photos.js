import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import styled from "styled-components"
import "@fontsource/alex-brush"

const query = `
{
    lindsayWeddingCollection {
    items {
      title
      image {
        url
      }
    }
  }
}
`

const Photos = () => {
    const [page, setPage] = useState(null);

    useEffect(() => {
        window
          .fetch(``, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authenticate the request
              Authorization: "Bearer ",
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }
    
            // rerender the entire component with new data
            setPage(data.lindsayWeddingCollection.items[0]);
          });

          console.log(page)

      }, []);

    if (!page) {
        return "Loading....";
    }

    return (
        <>
        <Navbar />
        <Title>Photos</Title>
        <img src={page.image.url} />
        <p>{page.title}</p>
        </>
    )
}

const Title = styled.h1`
    font-family: "Alex Brush";
`



export default Photos;