import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "@fontsource/alex-brush"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing-3"

const RSVPForm = () => {

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <>
          {modal ? (
            <RSVPContainer>
              <Title>RSVP</Title>
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