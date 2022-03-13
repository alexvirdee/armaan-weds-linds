import React, { useEffect, useState } from "react"
import Navbar from "../components/layout/Navbar"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faList,
  faBurger,
  faFish,
  faHotel,
  faSpa,
} from "@fortawesome/free-solid-svg-icons"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const dataList = [
  {
    id: 1,
    activity: "eat/drink",
    place: "Blond Giraffe Key Lime Pie Factory",
    infoText:
      "The Keys are known for their key lime pie - make sure to venture to this spot for the best of the best!",
    website: "https://www.blondgiraffe.com/",
    image: "../images/blonde-giraffe.png",
  },
  {
    id: 2,
    activity: "eat/drink",
    place: "Lazy days restaurant",
    infoText:
      "Soak in the sun and dine here for lunch/dinner. Make sure to get your sandwich extra lazy for a fun surprise. ",
    website: "https://www.lazydaysislamorada.com/",
    image: "../images/lazy-days.png",
  },
  {
    id: 3,
    activity: "eat/drink",
    place: "Key Largo Fisheries",
    infoText:
      "Now if you want the best stone crab you have to check this place out. Sanita sends Lindsay a batch of crabs from here every year because she loves them so much!",
    website: "https://www.keylargofisheries.com/",
    image: "../images/keylargo-fisheries.png",
  },
  {
    id: 4,
    activity: "adventure",
    place: "Fishing",
    infoText:
      "Islamorada is the sport fishing capital of the world! Lindsay grew up coming to the keys yearly and exploring the seas with the rest of the Virdee fam on the water fishing. We definitely recommend carving out some time to explore the waters.",
    image: "../images/dad-fishing.jpg",
  },
  {
    id: 5,
    activity: "adventure",
    place: "Alligator Reef Lighthouse",
    infoText:
      "Sitting offshore is a beautiful lighthouse with a diverse array of marine life. Armaan and Lindsay love taking the boat out and snorkeling near alligator reef lighthouse, it’s a must do!",
    website: "https://www.atlasobscura.com/places/alligator-reef-lighthouse",
    image: "../images/alligator-reef-2.jpg",
  },
  {
    id: 6,
    activity: "adventure",
    place: "Islamorada Sandbar",
    infoText:
      "Located off of mile marker 84 is Islamorada’s sandbar where you will see many boats join together! If you are lucky you may even catch the boat truck with delicious food. If venturing into the sea give the sandbar a pit stop!",
    image: "../images/sandbar-main.jpeg",
  },
  {
    id: 7,
    activity: "eat/drink",
    place: "Islamorada Brewery & Distillery ",
    infoText: "Relax and enjoy some craft beers. ",
    website: "https://www.islamoradabeerco.com/",
    image: "../images/islamorada-beer.png",
  },
  {
    id: 8,
    activity: "eat/drink",
    place: "Florida Keys Brewing Company",
    infoText: "A small micro brewery with an artsy island vibe.",
    website: "https://floridakeysbrewingco.com",
    image: "../images/fkbc-logo.png",
  },
  {
    id: 9,
    activity: "eat/drink",
    place: "Robbie’s of Islamorada ",
    infoText:
      "Have some fun and feed the tarpon. Robbie’s has a great restaurant and offers an abundance of activities which include: snorkeling, boat tours, kayaking, sunset cruises, jet skiing etc.",
    website: "https://www.robbies.com/",
    image: "../images/robbies-logo.png",
  },
  {
    id: 10,
    activity: "resort",
    place: "Cheeca Lodge",
    infoText:
      "Explore Cheeca Lodge’s amenities which include: a 9 hole golf course, 6 tennis courts, pickleball, basketball, shuffleboard, hopscotch, beach volleyball, kayaking, paddleboarding, fishing. Or relax and lounge, maybe take some time out and treat yourself at Cheeca Lodge’s Spa!",
    website: "https://www.cheeca.com/",
    image: "../images/cheeca-logo.png",
  },
  {
    id: 11,
    activity: "spa",
    place: "Ciao Bella Salon & Day Spa",
    infoText:
      "If you would like to get your hair or makeup done for any of the wedding events consider ciao Bella! ",
    website: "http://theislamoradaspa.com",
    image: "../images/ciao-spa-logo.jpeg",
  },
  {
    id: 12,
    activity: "spa",
    place: "Blu Bamboo Salon and Spa",
    infoText:
      "Blu bamboo offers full service salon and day spa. They specialize in hair, makeup, and nails",
    website: "http://www.blubamboo.com/",
    image: "../images/blu-bamboo.jpeg",
  },
]

const ThingsTodo = ({ data }) => {
  const [activities, setActivities] = useState(null)
  const [filteredActivities, setFilteredActivities] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    setActivities(dataList)
    setFilteredActivities(dataList.filter(e => e.activity))
    setLoading(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!loading) {
    return "Loading..."
  }

  let all = activities.filter(e => e.activity)
  let restaurants = activities.filter(e => e.activity === "eat/drink")
  let adventure = activities.filter(e => e.activity === "adventure")
  let resort = activities.filter(e => e.activity === "resort")
  let spa = activities.filter(e => e.activity === "spa")

  function showAll() {
    setFilteredActivities(all)
  }

  function showRestaurants() {
    setFilteredActivities(restaurants)
  }

  function showAdventures() {
    setFilteredActivities(adventure)
  }

  function showResorts() {
    setFilteredActivities(resort)
  }

  function showSpas() {
    setFilteredActivities(spa)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Heading>
        <Title>Things to Do</Title>
      </Heading>
      <FilterButtons>
        <FilterBtn onClick={() => showAll()}>
          <FontAwesomeIcon icon={faList} /> All
        </FilterBtn>
        <FilterBtn onClick={() => showRestaurants()}>
          <FontAwesomeIcon icon={faBurger} /> Eat/drink
        </FilterBtn>
        <FilterBtn onClick={() => showAdventures()}>
          <FontAwesomeIcon icon={faFish} /> Adventure
        </FilterBtn>
        <FilterBtn onClick={() => showResorts()}>
          <FontAwesomeIcon icon={faHotel} /> Resort
        </FilterBtn>
        <FilterBtn onClick={() => showSpas()}>
          <FontAwesomeIcon icon={faSpa} /> Spa
        </FilterBtn>
      </FilterButtons>
      <InformationContainer>
        {filteredActivities &&
          filteredActivities.map(item => {
            return (
              <Card key={item.id}>
                <CardLeft>
                  <h3
                    style={{
                      paddingRight: "4px",
                      color: "#fcb2a9",
                      fontFamily: "Barlow Condensed",
                      fontSize: "1.4rem",
                    }}
                  >
                    {item.place}
                  </h3>
                  {data.allFile.edges.map((img, index) => {
                    if (
                      item.image !== undefined &&
                      item.image.includes(img.node.relativePath)
                    ) {
                      return (
                        <div key={index}>
                          <GatsbyImage
                            style={{ borderRadius: "15px" }}
                            image={img.node.childImageSharp.gatsbyImageData}
                            alt={item.place}
                          />
                        </div>
                      )
                    } else {
                      return <></>
                    }
                  })}
                </CardLeft>
                <CardRight>
                  <div>
                    <p children={item.infoText}></p>
                  </div>
                  <div>
                    {item.website !== undefined ? (
                      <Button href={`${item.website}`} target="_blank">
                        🌐 Website
                      </Button>
                    ) : (
                      <></>
                    )}
                  </div>
                </CardRight>
              </Card>
            )
          })}
      </InformationContainer>
    </>
  )
}

export const query = graphql`
  query ThingsToDoQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 175, placeholder: BLURRED)
          }
          relativePath
        }
      }
    }
  }
`

const Heading = styled.div`
  grid-area: Heading;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 8px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const FilterBtn = styled.button`
  background-color: #3b81f6;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin-right: 8px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover,
  :focus {
    background-color: #f082ac;
  }
`

const InformationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`

const Card = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.5fr;
  grid-gap: 0.8rem;
  width: 500px;
  padding: 25px;
  margin-bottom: 35px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 10px 30px 3px rgba(0, 0, 0, 0.25);
  animation: fade 1s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }

  @media (max-width: 390px) {
    width: 380px;
    padding: 0;
    align-items: center;
  }
`

const CardLeft = styled.div`
  border-right: 2px solid lightgray;
  display: flex;
  flex-direction: column;
  height: auto;
`

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  font-family: "Barlow Condensed";
  font-size: 1.2rem;
`

const Button = styled.a`
  text-decoration: none;
  padding: 6px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  border-radius: 6px;
  border: none;
  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`

export default ThingsTodo
