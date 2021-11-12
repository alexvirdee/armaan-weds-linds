import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "@fontsource/alex-brush"
import "@fontsource/barlow-condensed"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing-3"

const RSVPForm = () => {
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <>
          {modal ? (
            <RSVPContainer>
              <Title>RSVP</Title>
              <Divider></Divider>
              <MainText>
                We have decided to keep our RSVP traditional and ask that you
                please respond and mail back your invite as soon as possible.
                Thank you!
              </MainText>
              <CloseBtn to={closeTo}>Close</CloseBtn>
            </RSVPContainer>
          ) : (
            <></>
          )}
        </>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default RSVPForm

const RSVPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: "Alex Brush";
`

const Divider = styled.div`
  border-bottom: 1px solid lightgrey;
  width: 50%;
  align-self: center;
  margin-bottom: 35px;
`
const MainText = styled.div`
  font-family: "Barlow Condensed";
  padding: 15px;
  text-align: center;
  align-self: center;
`

const CloseBtn = styled(Link)`
   padding: 0.3em 1.2em;
   margin: 1em 0.3em 0.3em 0;
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
   font-weight: 300;
   color: #ffffff;
   background-color: #000;
   text-align: center;
   transition: all 0.2s;
   align-self: center;
   cursor: pointer;

  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`
