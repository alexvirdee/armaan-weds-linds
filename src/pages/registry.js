import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/alex-brush"

const Registry = () => {
  return (
    <>
      <Navbar />
      <RegistryContainer>
        <Title>Registry</Title>
        <StaticImage width={300} src="../images/leaf-divider.png" alt="leaf divider" />
        <MainText>
          Please know that your presence at our wedding is present enough.
          However, for friends and family who have been asking and are looking
          for gift ideas we have created our registry through Zola. Please
          follow the button below thank you!
        </MainText>
        <ZolaBtn
          href="https://www.zola.com/registry/lindsayandarmaan"
          target="_blank"
        >
          View Registry
        </ZolaBtn>
      </RegistryContainer>
    </>
  )
}

const RegistryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: "Alex Brush";
`

const MainText = styled.p`
  width: 50%;
  padding: 25px;
  font-size: 1.2rem;
  text-align: center;
`

const ZolaBtn = styled.a`
  text-decoration: none;
  font-family: "Alex Brush";
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  text-align: center;
  border: 1px solid lightgray;
  font-size: 2rem;
  background-color: #fcb2a9;
  color: #fff;
  border-radius: 45px;
  padding: 10px;
  width: 10%;
  cursor: pointer;

  :hover {
    -webkit-filter: brightness(85%);
    -webkit-transition: all 10ms ease;
    -moz-transition: all 10ms ease;
    -o-transition: all 10ms ease;
    -ms-transition: all 10ms ease;
    transition: all 10ms ease;
  }

  @media (max-width: 1400px) {
    font-size: 1.8rem;
    padding: 8px;
    border-radius: 25px;
    width: 20%;
  }

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 25%;
  }
`

export default Registry
