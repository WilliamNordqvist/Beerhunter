import React from 'react';
import Styled from 'styled-components';

const Main = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    height:80vh;
`;

const map = () => (
    <Main>
        <header>
            <h2>Map sidan</h2>
        </header>
    </Main>
)
export default map;