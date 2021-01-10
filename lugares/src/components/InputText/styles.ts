import styled from 'styled-components';
import InputMask from 'react-input-mask';


export const Container = styled.div`
display:flex;
flex-direction:column;
label{
    color:white;
    line-height:25px;
}
`;


export const InputMaskDate = styled(InputMask)`

border-radius:10px;
height:48px;
width:238px;
background-color:white;
border:0;
box-sizing:border-box;
padding-left:15px;

@media(max-width: 800px) {
    width:300px;
}

&::placeholder{
    padding-left:8px;
}


`;

export const Input = styled.input`

border-radius:10px;
height:48px;
width:325px;
background-color:white;
border:0;
box-sizing:border-box;
padding-left:15px;

@media(max-width: 800px) {
    width:300px;
}

&::placeholder{
    padding-left:8px;
}

`;