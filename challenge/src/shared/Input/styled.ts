import styled from 'styled-components';
import InputMask from 'react-input-mask';
import icon from '../../assets/img/icon-select.png';

export const Select = styled.select`
  background-color: #fff;
  border: 0;
  border-radius: 7px;
  /* color: #868686; */
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

  /* option:not(:checked) {
    color: #000;
  } */
`;

export const Label = styled.p`
  position: absolute;
  color: #fff;
  top: -25px;
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const Input = styled(InputMask)`
  position: relative;
  border: 0;
  border-radius: 7px;
  padding: 1rem;
  width: 100%;
`;
