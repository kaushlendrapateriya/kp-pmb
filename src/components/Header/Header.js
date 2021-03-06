import React from "react";
import styledComponents from "styled-components";

const HeaderWrapper = styledComponents.div`
    background-color: blue;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Title = styledComponents.h1`
    height: 64px;
    pointer-events: none;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>Project Management Board</Title>
        </HeaderWrapper>
    );
};

export default Header;