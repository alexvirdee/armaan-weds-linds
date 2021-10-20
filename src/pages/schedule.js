import React from "react";
import Navbar from "../components/layout/Navbar";
import styled from "styled-components"
import "@fontsource/alex-brush"

const Title = styled.h1`
    font-family: "Alex Brush";
`

const schedule = () => {
    return (
        <>
        <Navbar />
        <Title>Schedule</Title>
        <div>
            Wedding planning is in the works. Please continue to refer to this website periodically for updates!
        </div>
        </>
    )
}

export default schedule;