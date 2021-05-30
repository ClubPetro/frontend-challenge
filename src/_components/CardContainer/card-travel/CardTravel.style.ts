import { CardContent, CardHeader, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';


export const CustomizedCard = withStyles({
    root:{
        width: '100%',
        height: '100%'
    }


})(Card);

export const CustomizedCardHeader = withStyles({
    root:{
        height: '2%',
        padding: '8px 8px',

    }
})(CardHeader);


export const CustomizedCardContent = withStyles({
    root:{
        padding: '4px 16px',
        height: '96%'
    }
})(CardContent)

export const CountryContainer = styled.div`


`

export const CountryImage = styled.img`
    width: 56px;
    height: 34px;
    padding-top: 0.5em;
`

export const CountryName = styled.h3`
    font-size: 1em;
    padding: 0.5em 0px;
    color: #4F9419;
    text-transform: uppercase;
`

export const LineDecoration = styled.div`
    border: solid 0.5px #ccc;

`


export const InfoContainer = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.9em;
    p{
        padding: 0.5em 1em;
    }
`

export const ContentWrapper = styled.div`
    height: 100%;
`


export const EditContainer = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`