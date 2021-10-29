import React, { useRef } from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import WeddingMap from "../components/Map/WeddingMap"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"

const TravelAndStay = () => {
  const locationRef = useRef(null)

  const handleScroll = () =>
    locationRef.current.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <Navbar />
      <Title>Travel & Stay</Title>
      <MainContainer>
        <Heading>
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
          <HeadingText>
            We are so excited to have you all travel from afar to join us during
            our wedding weekend. The nearest airport is MIA, however there are
            others if you plan on exploring South Florida or the Keys! There are
            plenty of shuttles and car rentals to choose from. If you do decide
            to take the shuttle, consider booking in advance.
          </HeadingText>
          <ScrollDownContainer onClick={handleScroll}>
            <Chevron>❤️</Chevron>
          </ScrollDownContainer>
        </Heading>
        <LocationInfo ref={locationRef}>
          <MapDisplay>
            <WeddingMap />
          </MapDisplay>
          <Accomodation>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontFamily: "Alex Brush",
                  paddingBottom: "35px",
                  textAlign: "center",
                }}
              >
                Cheeca Lodge & Spa
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "Barlow Condensed",
                  padding: "15px",
                }}
              >
                Our wedding will take place here at Cheeca Lodge. We would love
                for you to stay with us so please try to book as soon as
                possible. Cheeca Lodge & Spa is set on a beautiful 27 acre
                private oceanfront in Islamorada. It includes traditional
                Florida Keys architecture and we are incredibly excited to get
                married there.
              </div>
            </div>
          </Accomodation>
          <AccomodationImg>
            <StaticImage layout={"constrained"} src={"../images/cheeca.jpg"} />
          </AccomodationImg>
          <AccomodationSecond>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontFamily: "Alex Brush",
                  paddingBottom: "35px",
                  textAlign: "center",
                }}
              >
                Playa Largo Resort & Spa
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "Barlow Condensed",
                  padding: "15px",
                }}
              >
                Add information about Playa Largo
              </div>
            </div>
          </AccomodationSecond>
          <AccomodationSecondImg>
            <StaticImage
              layout={"constrained"}
              src={"../images/playa-largo.jpg"}
            />
          </AccomodationSecondImg>
          <AccomodationThird>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontFamily: "Alex Brush",
                  paddingBottom: "35px",
                  textAlign: "center",
                }}
              >
                Baker's Cay Resort Key Largo
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "Barlow Condensed",
                  padding: "15px",
                }}
              >
                Add information about Baker's Cay
              </div>
            </div>
          </AccomodationThird>
          <AccomodationThirdImg>
            <StaticImage
              layout={"constrained"}
              src={"../images/bakers-cay.jpg"}
            />
          </AccomodationThirdImg>
          <AirportInfo>
            <AirportList>
              <Airport>
                Miami International (64.4 miles)
                <ul>
                  <li>1 Hour and 55 minute drive</li>
                  <li>
                    Take LeJeune Road south to 836 West. Take the Florida
                    Turnpike south toward Key West. The Turnpike ends at US 1 in
                    Florida City. Follow U.S. 1 south to the Keys.
                  </li>
                </ul>
              </Airport>
              <Airport>
                Key West (EYW) (75.7 miles)
                <ul>
                  <li>1 Hour and 42 minute drive</li>
                  <li>
                    Take Overseas Hw (UN-1 N) all the way up to cheeca lodge{" "}
                  </li>
                </ul>
              </Airport>
              <Airport>
                Fort Lauderdale Hollywood Internation (FLL) (85.3 miles)
                <ul>
                  <li>1 Hour and 58 minute drive</li>
                  <li>
                    Exit the airport and follow the signs for 595 West. Take 595
                    to the Florida Turnpike and follow the signs for the Florida
                    Keys.
                  </li>
                </ul>
              </Airport>
            </AirportList>
          </AirportInfo>
        </LocationInfo>
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

const Heading = styled.div`
  grid-area: Heading;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #fffff8;
  border-bottom: 1px solid lightgrey;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
  padding-top: 8px;
`

const ImageCaption = styled.figcaption``

const HeadingText = styled.div`
  font-family: "Barlow Condensed";
  width: 45%;
  padding-top: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`

const ScrollDownContainer = styled.div`
  padding: 15px;
  cursor: pointer;
`

const Chevron = styled.div`
  font-size: 1.8rem;
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    10%,
    15%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-25px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
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
  padding-top: 35px;
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

const Airport = styled.li`
  padding-left: 12px;
  margin-bottom: 25px;
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

const AirportList = styled.ul`
  list-style-type: repeating-emoji;

  @counter-style repeating-emoji {
    system: cyclic;
    symbols: "✈️"; // unicode code point
    suffix: " ";
  }
`

export default TravelAndStay
