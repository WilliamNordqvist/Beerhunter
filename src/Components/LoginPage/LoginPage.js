import React from 'react';
import Styled from 'styled-components';
import Login from "./Login/Login";
import Logotype from "./LogoType/LogoType";

const LoginPage = Styled.div`
  
    background-color:SaddleBrown;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
`;

const loginPage = () =>( 
    <LoginPage>
        <Logotype/>
        <Login />
    </LoginPage>
)

export default loginPage;