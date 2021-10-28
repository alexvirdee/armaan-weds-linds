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
          <Accomodation>Cheeca Lodge & Spa</Accomodation>
          <AccomodationImg>
            <StaticImage layout={"constrained"} src={"../images/cheeca.jpg"} />
          </AccomodationImg>
          <AccomodationSecond>Playa Largo Resort & Spa</AccomodationSecond>
          <AccomodationSecondImg>
            <StaticImage layout={"constrained"}  src={"../images/playa-largo.jpg"} />
          </AccomodationSecondImg>
          <AccomodationThird>Baker's Cay Resort Key Largo</AccomodationThird>
          <AccomodationThirdImg>
            <StaticImage layout={"constrained"}  src={"../images/bakers-cay.jpg"} />
          </AccomodationThirdImg>
          <AirportInfo>
            We are so excited to have you all travel from afar to join us during
            our wedding weekend. The nearest airport is MIA, however there are
            others if you plan on exploring South Florida or the Keys! There are
            plenty of shuttles and car rentals to choose from. If you do decide
            to take the shuttle, consider booking in advance.
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
          <ImageCaption
            style={{ paddingTop: "15px", fontFamily: "Barlow Condensed" }}
          >
            Cheeca Lodge Resort Panorama at Sunrise
          </ImageCaption>
        </Heading>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2.5fr;
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
  padding-top: 45px;
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
  // border: 4px solid #000;
`

const Accomodation = styled.div`
  grid-area: Accomodation;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`

const AccomodationImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 25px;

  grid-area: Accomodation-img;
`

const AccomodationSecond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  grid-area: Accomodation-2;
`

const AccomodationSecondImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 25px;

  grid-area: Accomodation-2-img;
`

const AccomodationThird = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  grid-area: Accomodation-3;
`

const AccomodationThirdImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 25px;

  grid-area: Accomodation-3-img;
`

const AirportInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  grid-area: Airport-Info;
  padding: 25px;
  font-family: "Barlow Condensed";
`

const Heading = styled.div`
  grid-area: Heading;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
  padding: 8px;
`

const ImageCaption = styled.figcaption``

export default travelAndStay
