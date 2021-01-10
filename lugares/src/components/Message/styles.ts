import styled,{css} from 'styled-components';

interface MessageProps{
    type:string;
}

export const Container = styled.div<MessageProps>`

@keyframes entrace {
  from {opacity: 0}
  to {opacity: 1}
}


position:absolute;
top:15%;
@media(max-width:800px){
top:0;  
}
background-color:#ff7b54;
width:350px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
border-radius: 10px;
color:white;
font-weight:bold;
${props => {
    if(props.type === 'hide')return css`opacity:0`;
    if(props.type === 'error')return css`
    animation: entrace .5s ease-in;
    opacity:1
    `;
    if(props.type === 'info')return css`
    animation: entrace .5s ease-in;
    background-color:#00917c;
    opacity:1
    `;
}}

`