import React from "react"
import styled from "styled-components"

let groomsMenList = [
  {
    name: "Groomsman 1",
  },
  {
    name: "Groomsman 2",
  },
  {
    name: "Groomsman 3",
  },
  {
    name: "Groomsman 4",
  },
  {
    name: "Groomsman 5",
  },
  {
    name: "Groomsman 6",
  },
  {
    name: "Groomsman 7",
  },
  {
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
        return <GroomsMan>{person.name}</GroomsMan>
      })}
    </GroomsMenContainer>
  )
}

export default Groomsmen
