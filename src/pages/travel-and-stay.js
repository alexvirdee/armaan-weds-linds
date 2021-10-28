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
        <LocationInfo>
          <MapDisplay>
            <WeddingMap />
          </MapDisplay>
          <Accomodation
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            Accomodation
          </Accomodation>
          <AccomodationImg
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            Accomodation Img
          </AccomodationImg>
          <AccomodationSecond
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            Accomodation
          </AccomodationSecond>
          <AccomodationSecondImg
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            Accomodation Img
          </AccomodationSecondImg>
          <AccomodationThird
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            Accomodation
          </AccomodationThird>
          <AccomodationThirdImg
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            Accomodation Img
          </AccomodationThirdImg>
          <AirportInfo
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            Airport Info
          </AirportInfo>
        </LocationInfo>
        <Heading>
          <Title>Travel & Stay</Title>
          <StaticImage
            width={600}
            height={300}
            layout={"constrained"}
            src="../images/cheeca-lodge.jpg"
            alt="Cheeca Lodge Panorama"
          />
          <ImageCaption>Cheeca Lodge Resort Panorama at Sunrise</ImageCaption>
          <HeadingText>We are so excited to have you all travel from afar to join us during our wedding weekend. The nearest airport is MIA, however there are others if you plan on exploring South Florida or the Keys! There are plenty of shuttles and car rentals to choose from. If you do decide to take the shuttle, consider booking in advance.</HeadingText>
        </Heading>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr;
  gap: 0px 0px;
  grid-template-areas:
    "Heading"
    "Location-info";
`

const LocationInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.2fr 0.8fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Airport-Info Map"
    "Accomodation Accomodation-img"
    "Accomodation-2 Accomodation-2-img"
    "Accomodation-3 Accomodation-3-img";
  grid-area: Location-info;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    
    
    grid-template-areas:
    "Map ."
    "Airport-Info ."
    "Accomodation ."
    "Accomodation-img ."
    "Accomodation-2 ."
    "Accomodation-2-img ."
    "Accomodation-3 ."
    "Accomodation-3-img .";
  grid-area: Location-info;
  }
`

const MapDisplay = styled.div`
  grid-area: Map;
  border: 4px solid #000;
`

const Accomodation = styled.div`
  grid-area: Accomodation;
  border: 2px dashed magenta;
`

const AccomodationImg = styled.div`
  grid-area: Accomodation-img;
  border: 2px solid green;
`

const AccomodationSecond = styled.div`
  grid-area: Accomodation-2;
  border: 6px dashed lightblue;
`

const AccomodationSecondImg = styled.div`
  grid-area: Accomodation-2-img;
  border: 6px dashed indigo;
`

const AccomodationThird = styled.div`
  grid-area: Accomodation-3;
  border: 6px dashed purple;
`

const AccomodationThirdImg = styled.div`
  grid-area: Accomodation-3-img;
  border: 6px dashed lightgreen;
`

const AirportInfo = styled.div`
  grid-area: Airport-Info;
  border: 4px dashed teal;
`

const Heading = styled.div`
  grid-area: Heading;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
  padding: 8px;
  border: 4px dashed orange;
`

const ImageCaption = styled.figcaption`
    text-align: center;
    font-family: "Barlow Condensed;
`

const HeadingText = styled.p`
  color: red;
  font-family: "Alex Brush";
`

export default travelAndStay
