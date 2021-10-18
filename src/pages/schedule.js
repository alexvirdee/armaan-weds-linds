import React from "react";
import Navbar from "../components/layout/Navbar";
import styled from "styled-components"
import "@fontsource/great-vibes"

const Title = styled.h1`
    font-family: "Great Vibes";
`

const schedule = () => {
    return (
        <>
        <Navbar />
        <Title>Schedule</Title>
        </>
    )
}

export default schedule;