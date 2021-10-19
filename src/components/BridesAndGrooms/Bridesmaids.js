import React from "react"
import styled from "styled-components"

let bridesMaidsList = [
  {
    name: "Bridesmaid 1",
  },
  {
    name: "Bridesmaid 2",
  },
  {
    name: "Bridesmaid 3",
  },
  {
    name: "Bridesmaid 4",
  },
  {
    name: "Bridesmaid 5",
  },
  {
    name: "Bridesmaid 6",
  },
  {
    name: "Bridesmaid 7",
  },
  {
    name: "Bridesmaid 8",
  },
]

const BridesMaidsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
`

const BridesMaid = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 45px;
  text-align: center;
  margin-right: 45px;
  margin-left: 45px;
`

const Bridesmaids = () => {
  return (
    <BridesMaidsContainer>
      {bridesMaidsList.map(person => {
        return <BridesMaid>{person.name}</BridesMaid>
      })}
    </BridesMaidsContainer>
  )
}

export default Bridesmaids
