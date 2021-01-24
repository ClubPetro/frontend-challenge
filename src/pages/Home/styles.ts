import styled from 'styled-components';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
import InputMask from 'react-input-mask';

export const Container = styled.div`
  & > div.content-area {
    padding: 53px 36px;
  }
`;

export const Header = styled.div`
  height: 85px;
  background: #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img {
    padding-left: 53px;
  }
`;

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 247px;
  background: #4f9419;
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    div {
      h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
      }
    }
  }
`;

export const ContentArea = styled.div`
  margin: 50px 30px;
`;

export const Select = styled(NativeSelect)`
  width: 303px;
  height: 48px;
  background: #ffffff;
  border-radius: 7px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #868686;
`;

export const InputPlace = styled(Input)`
  width: 455px;
  height: 48px;
  background: #ffffff;
  border-radius: 7px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #868686;
`;

export const InputDate = styled(InputMask)`
  width: 238px;
  height: 48px;
  background: #ffffff;
  border-radius: 7px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
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
