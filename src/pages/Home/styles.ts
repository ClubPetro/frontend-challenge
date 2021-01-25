import styled from 'styled-components';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputMask from 'react-input-mask';

export const Container = styled.div``;

export const Header = styled.div`
  height: 85px;
  background: #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img {
    padding-left: 53px;
  }
`;

export const RegisterArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 200px;
  background: #4f9419;
  padding: 0 15px 0 15px;
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    line-break: strict;
    flex-flow: row wrap;
    justify-content: space-evenly;
    div {
      h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        margin-bottom: 3px;
      }
    }
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
  line-break: strict;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 30px 0;
`;

export const Select = styled(NativeSelect)`
  max-width: 100%;
  height: 48px;
  background: #ffffff;
  border: none;
  border-radius: 7px;
  select {
    font-family: Roboto;
    text-indent: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #868686;
  }
`;

export const InputPlace = styled(Input)`
  width: 40vw;
  min-width: 350px;
  height: 48px;
  background: #ffffff;
  border-color: white;
  border-radius: 7px;
  border: none;
  color: #868686;
  input {
    font-family: Roboto;
    text-indent: 18px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const InputDate = styled(InputMask)`
  width: 3vw;
  min-width: 238px;
  height: 48px;
  background: #ffffff;
  border-radius: 7px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-indent: 10px;
  color: #868686;
`;

export const AddButton = styled.button`
  width: 203px;
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
