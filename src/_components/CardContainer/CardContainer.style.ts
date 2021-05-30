import styled from 'styled-components';

export const CardGrid = styled.div`
    width: 92%;
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0px;
    padding-left: 6%;
    padding-right: 0%;

    @media(max-width: 800px){
        padding: 0px 0px;
        justify-content: center;
    }
`


export const CardWrapper = styled.div`
    margin-right: 20px;
    margin-bottom: 20px;
    width: 250px;
    height: 250px;
    
    @media(max-width: 580px){
        margin-right: 0px;        
    }
`