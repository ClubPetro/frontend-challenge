import styled from 'styled-components';
import { CardMedia } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputMask from 'react-input-mask';

interface IProps {
  visible: boolean;
}

export const Container = styled.div`
  position: fixed;
  display: ${(props: IProps) => (props.visible ? 'flex' : 'none')};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;
  justify-content: center;

  & > div {
    background: #ffffff;
    width: 40%;
    min-width: 300px;
    margin: auto;
    padding: 30px;
    border-radius: 5px;
    form {
      div {
        padding-bottom: 10px;
        h1 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          color: #000000;
          margin-top: 20px;
        }
      }
    }
  }
`;

export const Image = styled(CardMedia)`
  width: 56px;
  height: 34px;
`;

export const InputPlace = styled(Input)`
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-radius: 7px;
  /* border: none; */
  border-bottom: none;
  color: #868686;
  & > input {
    border-color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const InputDate = styled(InputMask)`
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-radius: 7px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const AddButton = styled.button`
  width: 100%;
  height: 49px;
  background: #006c18;
  border-radius: 7px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  border: none;
  margin-top: 19px;
  color: #ffffff;
`;
