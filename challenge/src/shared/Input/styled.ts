import styled from 'styled-components';
import InputMask from 'react-input-mask';
import icon from '../../assets/img/icon-select.png';

interface LabelProps {
  color?: string;
}

interface SelectProps {
  border?: boolean;
}

interface InputProps {
  border?: boolean;
}

export const Select = styled.select<SelectProps>`
  background-color: #fff;
  border: ${({ border }) => (border ? `2px solid #000` : 0)};
  border-radius: 7px;
  padding: 1.32rem;
  -webkit-appearance: none;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: center right 1.9rem;
  position: relative;
  display: block;
  width: 100%;
  font-size: 1.6rem;
  font-family: inherit;
`;

export const Label = styled.p<LabelProps>`
  position: absolute;
  color: ${({ color }) => (color ? `${color}` : '#fff')};
  top: -25px;
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const Input = styled(InputMask)<InputProps>`
  position: relative;
  border: ${({ border }) => (border ? `2px solid #d5d4d48a;` : 0)};
  border-radius: 7px;
  padding: 1rem;
  width: 100%;
`;
