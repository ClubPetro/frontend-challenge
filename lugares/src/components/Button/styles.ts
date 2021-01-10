import styled from 'styled-components';
import {shade} from 'polished';

export const ButtonSend = styled.button`
width:200px;
height:50px;
background-color:#006C18;
border:0;
border-radius:7px;
color:white;
cursor: pointer;
margin-top:25px;
&:hover{
    background-color:${shade(0.05,'#006C18')}
}

@media(max-width: 800px) {
    width:100%;
    border-radius: 0;
    bottom:0;
}

`;