import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import WeddingMap from "../components/Map/WeddingMap"
import "@fontsource/alex-brush"

const travelAndStay = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Title>Travel & Stay</Title>
        <MapDisplay>
          <WeddingMap />
        </MapDisplay>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
`

const Title = styled.h1`
  font-family: "Alex Brush";
  text-align: center;
`

const MapDisplay = styled.div`
`

export default travelAndStay
