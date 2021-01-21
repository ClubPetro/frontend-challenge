import styled from 'styled-components';

interface ContainerProps {
  large: boolean;
}

export const Container = styled.input<ContainerProps>`
  width: ${props => (props.large ? '445px' : '230px')};
  height: 48px;
  border-radius: 7px;
  background-color: #fff;
  padding: 18px;
  border: 2px solid transparent;
`;
