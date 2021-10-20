import React from "react"
import styled from "styled-components"

let groomsMenList = [
  {
    id: 1,
    name: "Groomsman 1",
  },
  {
    id: 2,
    name: "Groomsman 2",
  },
  {
    id: 3,
    name: "Groomsman 3",
  },
  {
    id: 4,
    name: "Groomsman 4",
  },
  {
    id: 5,
    name: "Groomsman 5",
  },
  {
    id: 6,
    name: "Groomsman 6",
  },
  {
    id: 7,
    name: "Groomsman 7",
  },
  {
    id: 8,
    name: "Groomsman 8",
  },
]

const GroomsMenContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
`

const GroomsMan = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 45px;
  text-align: center;
  margin-right: 45px;
  margin-left: 45px;
`

const Groomsmen = () => {
  return (
    <GroomsMenContainer>
      {groomsMenList.map(person => {
        return <GroomsMan key={person.id}>{person.name}</GroomsMan>
      })}
    </GroomsMenContainer>
  )
}

export default Groomsmen
