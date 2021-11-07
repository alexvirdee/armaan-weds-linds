import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'


const RSVPForm = () => {
    return (
        <ModalRoutingContext.Consumer>
             {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}
 
        <h2>Modal Page</h2>
 
        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
            {/* RSVP Form
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email" />
            <input placeholder="Dietary preferences?" /> */}
        </ModalRoutingContext.Consumer>
    )
}

export default RSVPForm;