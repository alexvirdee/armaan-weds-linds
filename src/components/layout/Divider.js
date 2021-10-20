import React from "react";
import styled from "styled-components";


const Divider = () => {
    return <DividerStyle></DividerStyle>
}

const DividerStyle = styled.div`
    border-bottom: 2px solid #33333320;
    width: 100%;
    padding-top: 35px;
    margin-bottom: 25px;
`

export default Divider;