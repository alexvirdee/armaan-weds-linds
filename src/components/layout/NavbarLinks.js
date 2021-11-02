import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/our-story">Our Story</NavItem>
      <NavItem to="/registry">Registry</NavItem>
      <NavItem to="/things-to-do">Things To Do</NavItem>
      <NavItem to="/travel-and-stay">Travel & Stay</NavItem>
      <NavItem to="/photos">Photos</NavItem>
      <NavItem to="/schedule">Schedule</NavItem>
      <NavItem to="/faq">FAQ</NavItem>
    </>
  )
}

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #fcb2a9;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #fcb2a9;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 1.2rem;
    z-index: 6;
  }
`

export default NavbarLinks
