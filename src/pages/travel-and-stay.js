import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import WeddingMap from "../components/Map/WeddingMap"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"

const travelAndStay = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <div>
          <Title>Travel & Stay</Title>
          <StaticImage
            width={600}
            height={350}
            layout={"constrained"}
            src="../images/cheeca-lodge.jpg"
            alt="Cheeca Lodge Panorama"
          />
          <ImageCaption>Cheeca Lodge Resort Panorama at Sunrise</ImageCaption>
        </div>
        <h1>INFORMATION HERE</h1>
        <h1>INFORMATION HERE</h1>
        <h1>INFORMATION HERE</h1>
        <h1>INFORMATION HERE</h1>
        <MapDisplay>
          <WeddingMap />
        </MapDisplay>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
`

const ImageCaption = styled.figcaption`
    text-align: center;
    font-family: "Barlow Condensed;
`

const MapDisplay = styled.div``

export default travelAndStay
