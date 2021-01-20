import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/img/world.png'

const HeaderWrapper = styled.header`
    background-color: #000;
    height: 88px;
    width: 100vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    display: flex;
    align-items: center;
    overflow: hidden;
`;

const ImgWrapper = styled.img`
    position: absolute;
    width: 152px;
    height: 139px;
    left: 53px;
    top: -28px;
`;

function Header() {
    return (
        <HeaderWrapper>
            <ImgWrapper src={logo} alt="logo-world"/>
        </HeaderWrapper>
    )

};

export default Header;