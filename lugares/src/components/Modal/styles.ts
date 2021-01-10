import styled,{css} from 'styled-components';
import {shade} from 'polished';

interface ModalProps{
    isVisible:boolean;
}


export const Container = styled.div<ModalProps>`

position:absolute;
border-radius:10px;
opacity:.95;
width: 50%;
height:60%;
margin:auto;
top: 100px;
left:9000px;
right:0;
background-color:#00917c;
border: 1px white solid;
padding-left:  5%;
box-sizing:border-box;

${props => {
    if(props.isVisible) return css`left:0px;`
} };

header{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    button{
        border:none;
        background:#fff;
        margin: 0px 5px 50px 5px;
        margin-top: 2px;
        cursor: pointer;
        right:0;
        &:hover{
            background-color:${shade(.10,'#fff')}
        }
        
        
    }
}


h2{
    margin: 15px 0;
    font-size:30px;
    font-weight:bold;
    color:white;
}

`;