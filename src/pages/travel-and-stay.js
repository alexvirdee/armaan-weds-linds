import React from "react";
import Navbar from "../components/layout/Navbar";
import styled from "styled-components"
import "@fontsource/alex-brush"


const travelAndStay = () => {
    return (
        <>
        <Navbar />
        <MainContainer>
        <Title>Travel & Stay</Title>
        </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Title = styled.h1`
    font-family: "Alex Brush";
`

export default travelAndStay;