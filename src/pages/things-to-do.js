import React, { useState } from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/alex-brush"

const data = [
  {
    id: 1,
    activityType: "eat/drink",
    place: "Blond Giraffe Key Lime Pie Factory",
    infoText:
      "The Keys are known for their key lime pie - make sure to venture to this spot for the best of the best!",
  },
  {
    id: 2,
    activityType: "eat/drink",
    place: "Lazy days restaurant",
    infoText:
      "Soak in the sun and dine here for lunch/dinner. Make sure to get your sandwich extra lazy for a fun surprise. ",
  },
  {
    id: 3,
    activityType: "eat/drink",
    place: "Key Largo Fisheries",
    infoText:
      "Now if you want the best stone crab you have to check this place out. Sanita sends Lindsay a batch of crabs from here every year because she loves them so much!",
  },
  {
    id: 4,
    activityType: "adventure",
    place: "Fishing",
    infoText:
      "Islamorada is the sport fishing capital of the world! Lindsay grew up coming to the keys yearly and exploring the seas with the rest of the Virdee fam on the water fishing. We definitely recommend carving out sometime to explore the waters.",
  },
  {
    id: 5,
    activityType: "adventure",
    place: "Alligator Reef Lighthouse",
    infoText:
      "Sitting offshore is a beautiful lighthouse with a diverse array of marine life. Armaan and Lindsay love taking the boat out and snorkeling near alligator reef lighthouse, it’s a must do!",
  },
  {
    id: 6,
    activity: "adventure",
    place: "Islamorada Sandbar",
    infoText:
      "Located off of mile marker 84 is Islamorada’s sandbar where you will see many boats join together! If you are lucky you may even catch the boat truck with delicious food. If venturing into the sea give the sandbar a pit stop!",
  },
  {
    id: 7,
    activity: "eat/drink",
    place: "Islamorada Brewery & Distillery ",
    infoText: "Relax and enjoy some craft beers. ",
  },
  {
    id: 8,
    activity: "eat/drink",
    place: "Robbie’s of Islamorada ",
    infoText:
      "Have some fun and feed the tarpon. Robbie’s has a great restaurant and offers an abundance of activities which include: snorkeling, boat tours, kayaking, sunset cruises, jet skiing etc.",
  },
]

const ThingsTodo = () => {
  return (
    <>
      <Navbar />
      <Heading>
        <Title>Things to Do</Title>
      </Heading>
      <InformationContainer>
        {data.map(item => {
          return (
            <>
              <Card>
                <CardLeft>
                  <h3 style={{ paddingTop: "12px", color: "#FCB2A9" }}>{item.place}</h3>
                </CardLeft>
                <CardRight>
                  <div>
                    {item.infoText}
                  </div>
                </CardRight>
              </Card>
            </>
          )
        })}
      </InformationContainer>
    </>
  )
}

const Heading = styled.div`
  grid-area: Heading;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
`

const InformationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  // align-items: center;
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
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.35);
  animation: fade 1s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
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
  justify-content: center;
  align-items: center;
  padding-left: 12px;
`

export default ThingsTodo
