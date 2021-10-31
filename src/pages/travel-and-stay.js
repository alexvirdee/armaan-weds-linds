import React, { useRef } from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import WeddingMap from "../components/Map/WeddingMap"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"

const hotelData = [
  {
    id: 1,
    hotel: "Cheeca Lodge & Spa",
    hotelInfo:
      "Our wedding will take place here at Cheeca Lodge. We would love for you to stay with us so please try to book as soon as possible. Cheeca Lodge & Spa is set on a beautiful 27 acre private oceanfront in Islamorada. It includes traditional Florida Keys architecture and we are incredibly excited to get married there.",
    hotelImg: "../images/cheeca.jpg"
  },
  {
    id: 2,
    hotel: "Playa Largo Resort & Spa",
    hotelInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu cursus lectus, ac consequat sapien. Sed ac luctus quam, non ultricies ipsum. Nulla metus nulla, auctor quis ipsum ac, blandit mollis magna.",
      hotelImg: "../images/playa-largo.jpg"
  },
  {
    id: 3,
    hotel: "Baker's Cay Resort Key Largo",
    hotelInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu cursus lectus, ac consequat sapien. Sed ac luctus quam, non ultricies ipsum. Nulla metus nulla, auctor quis ipsum ac, blandit mollis magna.",
      hotelImg: "../images/bakers-cay.jpg"
  },
]

const TravelAndStay = ({ data }) => {
  const locationRef = useRef(null)

  const handleScroll = () =>
    locationRef.current.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <Navbar />
      <Title>Travel & Stay</Title>
      <Heading>
        <StaticImage
          width={600}
          height={300}
          placeholder="blurred"
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
          plenty of shuttles and car rentals to choose from. If you do decide to
          take the shuttle, consider booking in advance.
        </HeadingText>
        <ScrollDownContainer onClick={handleScroll}>
          <Chevron>❤️</Chevron>
        </ScrollDownContainer>
      </Heading>
      <LocationInfo ref={locationRef}>
        <AirportAndMapContainer>
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
          <MapContain>
            <WeddingMap />
          </MapContain>
        </AirportAndMapContainer>
        {hotelData.map((item, index) => {
          return (
            <AccomodationsContainer key={index}>
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
                    {item.hotel}
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "Barlow Condensed",
                      padding: "15px",
                    }}
                  >
                    {item.hotelInfo}
                  </div>
                </div>
              </Accomodation>
              <AccomodationImg>
                {data.allFile.edges.map((img, index) => {
                  if (
                    item.hotelImg !== undefined && 
                    item.hotelImg.includes(img.node.relativePath)
                    ) {
                    return (
                      <div key={index}>
                        <GatsbyImage image={img.node.childImageSharp.gatsbyImageData} alt={item.hotel} style={{ borderRadius: "15px" }} />
                      </div>
                    )
                  } else {
                    return (
                      <></>
                    )
                  }
                })}
                {/* <StaticImage
                  placeholder="blurred"
                  layout={"constrained"}
                  src={"../images/cheeca.jpg"}
                  width={1000}
                  height={500}
                  alt={item.hotel}
                /> */}
              </AccomodationImg>
            </AccomodationsContainer>
          )
        })}
      </LocationInfo>
    </>
  )
}

export const query = graphql`
  query TravelAndStay {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 500)
          }
          relativePath
        }
      }
    }
  }
`

const Heading = styled.div`
  grid-area: Heading;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
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
  grid-area: Location-info;
`

const AirportAndMapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 0.8fr));
  align-items: center;
  justify-content: center;
`

const Airport = styled.li`
  padding-left: 12px;
  margin-bottom: 25px;
`

const AirportInfo = styled.div`
  place-self: center;
  font-size: 1.2rem;
  padding: 35px;
  font-family: "Barlow Condensed";
`

const MapContain = styled.div`
  place-self: center;
  width: 500px;
  height: 350px;

  @media (max-width: 768px) {
    width: 450px;
    height: 250px;
  }
`

const AirportList = styled.ul`
  list-style-type: "✈️";
`

const AccomodationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 0.8fr));
  align-items: center;
  justify-content: center;
`

const Accomodation = styled.div`
  place-self: center;
`

const AccomodationImg = styled.div`
  place-self: center;
  margin: 25px;
`

export default TravelAndStay
