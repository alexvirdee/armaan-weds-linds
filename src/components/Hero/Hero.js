import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import WeddingCountdown from "./WeddingCountdown";
import "@fontsource/great-vibes";

const HeroContainer = styled.div`
    height: 80vh;
    text-align: center;
    margin-bottom: 45px;
`

const Title = styled.h1`
    font-family: "Great Vibes";
    font-size: 64px;
`

const Hero = () => {
    return (
        <HeroContainer>
            <StaticImage layout={"fullWidth"} src="../../images/hero-test.jpg" alt="hero" />
            <WeddingCountdown countdownTimeStampMs={1666281600000} />
            <Title>Armaan & Lindsay</Title>
        </HeroContainer>
    )
}

export default Hero;