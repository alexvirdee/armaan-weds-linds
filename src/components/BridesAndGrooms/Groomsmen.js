import React from "react";
import styled from "styled-components";

const GroomsMan = styled.div`
    width: 200px;
    height: 200px;
    background-color: blue;
`

const Groomsmen = () => {
    return (
        <div>
            <GroomsMan>
                Person 1
            </GroomsMan>
        </div>
    )
}

export default Groomsmen;