import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/img/world.png'

const HeaderWrapper = styled.header`
    background-color: #000;
    height: 82px;
    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    display: flex;
    align-items: center;
`;

const ImgWrapper = styled.img`
    height: 100%;
    margin-left: 53px;
    
`;

function Header() {
    return (
        <HeaderWrapper>
            <ImgWrapper src={logo} alt="logo-world"/>
        </HeaderWrapper>
    )

};

export default Header;