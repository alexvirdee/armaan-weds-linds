import React from "react";
import Navbar from "../components/layout/Navbar";
import styled from "styled-components"
import "@fontsource/alex-brush"

const Title = styled.h1`
    font-family: "Alex Brush";
`

const photos = () => {
    return (
        <>
        <Navbar />
        <Title>Photos</Title>
        </>
    )
}

export default photos;