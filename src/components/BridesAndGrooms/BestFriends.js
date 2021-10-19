import React from "react";
import styled from "styled-components"
import Tabs from "./Tabs";
import "@fontsource/great-vibes"

const FriendsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-family: "Great Vibes";
    text-align: center;
`

const BestFriends = () => {
    return (
        <FriendsWrapper>
           <Title>Best Friends</Title>
           <Tabs />
        </FriendsWrapper>
    )
}

export default BestFriends;