import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const FlowerVector = () => {
  return (
    <FlowerContainer>
      <StaticImage
        width={800}
        placeholder={"blurred"}
        aspectRatio={16 / 8}
        transformOptions={"contain"}
        src="../../images/flowers-vector.svg"
        alt="flowers"
      />
    </FlowerContainer>
  )
}

const FlowerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 999;
  animation: fade 1s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export default FlowerVector
