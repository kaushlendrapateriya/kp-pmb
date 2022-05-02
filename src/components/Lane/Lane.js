import React from "react";
import styledComponents from "styled-components";

const LaneWrapper = styledComponents.div`
    list-style: none;
    text-align: left;
    padding: 0;
    background: lightGray;
    border-radius: 20px;
    min-height: 50vh;
    width: 20vw;

    @media (max-width: 768px) {
        margin-bottom: 5%;
    }
`;

const Title = styledComponents.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkGray;
`;

const Lane = ({ title }) => {
    return (
        <LaneWrapper>
            <Title>{ title }</Title>
        </LaneWrapper>
    );    
};

export default Lane;