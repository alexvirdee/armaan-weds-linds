import React, { useState } from 'react';
import styled from 'styled-components';
import Groomsmen from "./Groomsmen";
import Bridesmaids from './Bridesmaids';
import "@fontsource/barlow-condensed"

const Tab = styled.button`
  font-size: 24px;
  font-family: "Barlow Condensed";
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #B0D5C0;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const types = ['Groomsmen', 'Bridesmaids'];

const Tabs = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <div> {active === 'Groomsmen' ? <Groomsmen /> : <Bridesmaids /> } </div>
    </>
  );
}

export default Tabs;