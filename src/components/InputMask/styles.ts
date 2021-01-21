import styled from 'styled-components';
import ReactInputMask from 'react-input-mask';

interface ContainerProps {
  isLarge: boolean;
}

export const Container = styled(ReactInputMask)<ContainerProps>`
  width: ${props => (props.isLarge ? '445px' : '230px')};
  height: 48px;
  border-radius: 7px;
  background-color: #fff;
  padding: 18px;
  border: 2px solid transparent;
`;
