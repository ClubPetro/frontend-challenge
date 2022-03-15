import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
  background-color: #fff;
  height: 100%;
  position: relative;
  width: 300px;
  overflow-x: hidden ;
  padding: 26px 26px ;
  flex-direction: column ;
  align-items: center ;
  display:flex ;

  span {
    margin-bottom: 8px ;
  }

  img{
    width: 150px;
    /* height: 150px; */
  }
  h1{
    color: #4F9419;
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 0;
    text-align: center;
  }
  small{
    color: #000;
    text-align: center;
  }
`
export const TitleContainer = styled.div`
  display:flex ;
  flex-direction: column ;
  align-items: center ;
  margin-bottom: 10px ;
`

export const Line = styled.div`
  background-color: #ABABAB;
  height: 1px !important;
  width: 100%;
  margin-bottom: 6px ;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column ;
  width: 100%;
`


export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 14px ;

`
export const Option = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const SaveButton = styled.button`
  background: #006C18;
  border-radius: 7px;
  width: 90%;
  align-self: center;
  height: 40px;
  border: 0;
  margin-top: 24px ;
  color: #fff;
  font-size: 18px;
  cursor: pointer ;
  transition: filter 0.2s;
  
  

  &:hover{
    filter: brightness(0.8)
  }

  

`