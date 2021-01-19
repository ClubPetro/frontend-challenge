import React from 'react';
import { Edit, Clear } from '@material-ui/icons';
import styled from 'styled-components';

import brasil from '../../assets/img/brasil.png';

const CardContainer = styled.div`
    width: 250px;
    height: 250px;

    border: solid 1px rgba(86,86,86, 0);
    border-top: none;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 0px rgba(190,185,190,1);
    margin: 0 30px 50px 30px;
`;

const ImgWrapper = styled.img`
    height: 34px;
    width: 56px;
    margin-bottom: 10px;
`;

const TopCardContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 30%;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
`;

const CountryName = styled.span`
    font-size: 18px;
    color: #4F9419;
    weight: 700;
`;

const GradientHr = styled.hr`
    border-width: 0.1px;
    width: 90%;
`;

const FlagAndNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const ButtonsContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    color: #868686;
`;

const SpecificationContainer = styled.div`
    padding: 35px 25px 45px 25px;
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;
`;

const Span = styled.span`
    padding: 5px 0px;
`;

function Card() {
    return (
        <CardContainer>
            <TopCardContainer>
                <FlagAndNameContainer>
                    <ImgWrapper src={brasil} alt="brasil"/>
                    <CountryName>Brasil</CountryName>
                </FlagAndNameContainer>
                <ButtonsContainer>
                    <Edit />
                    <Clear />
                </ButtonsContainer>
            </TopCardContainer>
            <GradientHr />
            <SpecificationContainer>
                <Span>Local: Campina Grande</Span>
                <Span>Meta: 04/2022</Span>
            </SpecificationContainer>
        </CardContainer>
    );
}

export default Card;