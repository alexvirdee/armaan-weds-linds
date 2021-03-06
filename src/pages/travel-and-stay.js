import React, { useEffect, useRef } from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import WeddingMap from "../components/Map/WeddingMap"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const airportData = [
  {
    id: 1,
    airport: "Miami International (64.4 miles)",
    driveTime: "1 Hour and 55 minute drive",
    directions:
      "Take LeJeune Road south to 836 West. Take the Florida Turnpike south toward Key West. The Turnpike ends at US 1 in Florida City. Follow U.S. 1 south to the Keys.",
  },
  {
    id: 2,
    airport: "Key West (EYW) (75.7 miles)",
    driveTime: "1 Hour and 42 minute drive",
    directions: "Take Overseas Hw (UN-1 N) all the way up to cheeca lodge",
  },
  {
    id: 3,
    airport: "Fort Lauderdale Hollywood Internation (FLL) (85.3 miles)",
    driveTime: "1 Hour and 58 minute drive",
    directions:
      "Exit the airport and follow the signs for 595 West. Take 595 to the Florida Turnpike and follow the signs for the Florida Keys.",
  },
]

const hotelData = [
  {
    id: 1,
    hotel: "Cheeca Lodge & Spa",
    hotelInfo:
      "Our wedding will take place here at Cheeca Lodge. We would love for you to stay with us, so please try to book as soon as possible. Cheeca Lodge & Spa is set on a beautiful 27 acre private oceanfront in Islamorada. It includes traditional Florida Keys architecture and we are incredibly excited to get married here! Our room block code is 8157 when checking for room availability please add this under group codes. If you are having difficulties booking online you can call Cheeca lodge at 305-664-4651 and let them know the code and name of the wedding block which is “Virdee-Turkhud Wedding Room Block”.",
    subText:
      "If you are staying at Cheeca lodge a private car service can be arranged by their concierge to and from the airport. Please call 305-517-4505 if this interests you!",
    website:
      "https://gc.synxis.com/rez.aspx?Hotel=29678&Chain=13057&arrive=10/21/2022&depart=10/23/2022&adult=1&child=0&group=8157",
    hotelImg: "../images/cheeca.jpg",
  },
  {
    id: 2,
    hotel: "Postcard Inn",
    hotelInfo:
      "Just a 5 minute drive from Cheeca Lodge sits Postcard Inn. Postcard Inn has been serving Islamorada with their special cocktails since 1951. We recommend staying here if you are digging a more relaxing vibe with oceanfront rooms. ",
    website:
      "https://www.holidayisle.com/?utm_source=google&utm_medium=gmb&utm_campaign=listing",
    hotelImg: "../images/postcard-inn.jpeg",
  },
  {
    id: 3,
    hotel: "Islander Resort",
    hotelInfo:
      "The Islander is another beautiful closeby resort. It is only a 4 minute drive away or 13 minute walk from our wedding venue!",
    website: "https://www.islanderfloridakeys.com/",
    hotelImg: "../images/islander-resort.jpeg",
  },
  {
    id: 4,
    hotel: "Amara Cay",
    hotelInfo:
      "Amara Cay is a 4 minute drive to Cheeca Lodge. Stay here for a “refined, but not uppity” atmosphere.",
    website: "https://www.amaracayresort.com/",
    hotelImg: "../images/amara-cay.jpeg",
  },
  {
    id: 5,
    hotel: "Lime Tree bay",
    hotelInfo: "",
    website: "https://limetreebayresort.com/",
    hotelImg: "../images/lime-tree.jpeg",
  },
  {
    id: 6,
    hotel: "La Jolla Resort ",
    hotelInfo: "",
    website: "https://www.lajollaresort.com/",
    hotelImg: "../images/lajolla.jpeg",
  },
  {
    id: 7,
    hotel: "Chesapeake Beach Resort",
    hotelInfo: "",
    website: "https://www.chesapeake-resort.com/amenities-services/",
    hotelImg: "../images/chesapeake.jpeg",
  },
  {
    id: 8,
    hotel: "Pelican Cove Resort & Marina",
    hotelInfo: "",
    website: "https://www.pelicancovehotel.com/",
    hotelImg: "../images/pelican-cove.jpeg",
  },
  {
    id: 9,
    hotel: "The Sunset Inn",
    hotelInfo: "",
    website: "https://sunsetinnkeys.com/",
    hotelImg: "../images/sunset-inn.jpeg",
  },
]

const TravelAndStay = ({ data }) => {
  useEffect(() => {
    alert(
      "Key West Fantasy Schedule 10/22 through 10/30. Please plan for extra time to for travel down to Islamorada"
    )
  }, [])

  const locationRef = useRef(null)

  const handleScroll = () =>
    locationRef.current.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner>
        <BannerText>
          <Exclamation>❗</Exclamation> Peak season in Islamorada starts mid
          October. We recommend making hotel and travel bookings as soon as
          possible <Exclamation>❗</Exclamation>
        </BannerText>
        <BannerText>
          At time of placing reservation at Cheeca Lodge, they require a one
          night plus tax fee. The remainder will be charged at checkout.
        </BannerText>
      </Banner>
      <Heading>
        <Title>Travel & Stay</Title>
        <StaticImage
          width={600}
          height={300}
          placeholder="blurred"
          layout={"constrained"}
          src="../images/cheeca-lodge.jpg"
          alt="Cheeca Lodge Panorama"
        />
        <HeadingText>
          We are so grateful to those of you that can make the trip to join us
          during our wedding weekend. The nearest airport is MIA, however there
          are others if you plan on exploring South Florida or the Keys! There
          are plenty of shuttles and car rentals to choose from. If you do
          decide to take the shuttle, consider booking in advance.
        </HeadingText>
        <ScrollDownContainer onClick={handleScroll}>
          <Chevron></Chevron>
        </ScrollDownContainer>
      </Heading>
      <LocationInfo ref={locationRef}>
        <AirportAndMapContainer>
          <TravelInfo>
            <AirportList>
              {airportData.map(item => {
                return (
                  <ListItem key={`${item.id}-airport`}>
                    {item.airport}
                    <ul>
                      <li>{item.driveTime}</li>
                      <li>{item.directions}</li>
                    </ul>
                  </ListItem>
                )
              })}
            </AirportList>
            <ShuttleList>
              <ListItem>
                Greyhound lines
                <ul>
                  <li>
                    <ShuttleLink href="http://keysshuttle.com/" target="_blank">
                      Keys Shuttle
                    </ShuttleLink>{" "}
                    provides three trips daily, with door to door shuttle
                    service from the Florida Keys from/to Miami and Ft.
                    Lauderdale airports, seven days a week. Call 305-289-9997 or
                    888-765-9997.
                  </li>
                </ul>
              </ListItem>
            </ShuttleList>
          </TravelInfo>
          <MapContain>
            <WeddingMap />
          </MapContain>
        </AirportAndMapContainer>
        <HotelContainer>
          {hotelData.map((item, index) => {
            return (
              <AccomodationsContainer
                href={item.website}
                target="_blank"
                key={`${index}-hotel`}
              >
                <Accomodation>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "5px",
                      padding: "8px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2.2rem",
                        fontFamily: "Alex Brush",
                        paddingBottom: "15px",
                        textAlign: "center",
                      }}
                    >
                      {item.hotel}
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontFamily: "Barlow Condensed",
                        padding: "25px",
                        textAlign: "center",
                      }}
                    >
                      {item.hotelInfo}
                      {item.subText ? (
                        <div
                          style={{
                            marginTop: "12px",
                            textAlign: "center",
                          }}
                        >
                          {item.subText}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </Accomodation>
                <AccomodationImg>
                  {data.allFile.edges.map((img, index) => {
                    if (
                      item.hotelImg &&
                      item.hotelImg.includes(img.node.relativePath)
                    ) {
                      return (
                        <div key={`${index}-hotel`}>
                          <GatsbyImage
                            image={img.node.childImageSharp.gatsbyImageData}
                            alt={item.hotel}
                            imgStyle={{ borderRadius: "15px" }}
                            placeholder={"blurred"}
                          />
                        </div>
                      )
                    } else {
                      return <></>
                    }
                  })}
                </AccomodationImg>
              </AccomodationsContainer>
            )
          })}
        </HotelContainer>
      </LocationInfo>
      <FooterContainer>
        <StaticImage
          placeholder="blurred"
          layout={"fullWidth"}
          src="../images/aerial-islamorada.jpg"
          alt="Islamorada Drone Shot"
          title="Islamorada Drone Shot"
        />
      </FooterContainer>
    </>
  )
}

export const query = graphql`
  query TravelAndStay {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 450)
          }
          relativePath
        }
      }
    }
  }
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid lightgrey;
  padding: 12px 0px 12px 0px;
  background-color: #004992;
`

const BannerText = styled.div`
  font-family: "Barlow Condensed";
  color: #fff;
  font-size: 16px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 14px;
  }
`

const Exclamation = styled.span`
  font-size: 24px;
`

const Heading = styled.div`
  grid-area: Heading;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  border-bottom: 1px solid lightgrey;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
  padding: 6px;
  // border: 2px solid blue;
`

const HeadingText = styled.div`
  font-family: "Barlow Condensed";
  width: 45%;
  padding: 8px 0px 8px 0px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`

const ScrollDownContainer = styled.div`
  padding: 15px;
  cursor: pointer;
`

const Chevron = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
  }
  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    left: 4px;
    top: 2px;
  }

  font-size: 2.4rem;
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

const ListItem = styled.li`
  padding-left: 12px;
  margin-bottom: 25px;
`

const TravelInfo = styled.div`
  place-self: center;
  font-size: 1.2rem;
  padding: 35px;
  font-family: "Barlow Condensed";
`

const MapContain = styled.div`
  margin-top: 15px;
  place-self: center;
  width: 550px;
  height: 375px;

  @media (max-width: 768px) {
    width: 300px;
    height: 375px;
  }
`

const AirportList = styled.ul`
  list-style-type: "✈️";
`

const ShuttleList = styled.ul`
  list-style-type: "🚌";
`

const ShuttleLink = styled.a`
  text-decoration: none;
  color: #aadaff;
`

const HotelContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const AccomodationsContainer = styled.a`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 0.8fr));
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  border-bottom: 2px solid lightgrey;
  margin: 45px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid lightgray;
  width: 80%;

  :hover {
    background-color: #aadaff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const Accomodation = styled.div`
  place-self: center;
`

const AccomodationImg = styled.div`
  place-self: center;
  margin: 25px;
`

const FooterContainer = styled.div`
  margin-top: 60px;
`

export default TravelAndStay
