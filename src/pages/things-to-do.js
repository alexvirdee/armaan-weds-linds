import React from "react";
import Navbar from "../components/layout/Navbar";
import styled from "styled-components"
import "@fontsource/alex-brush"


const thingsTodo = () => {
    return (
        <>
        <Navbar />
        <Title>Things to Do</Title>
        </>
    )
}

const Title = styled.h1`
    font-family: "Alex Brush";
`

export default thingsTodo;