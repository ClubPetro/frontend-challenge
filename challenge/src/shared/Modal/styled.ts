import styled, { keyframes } from 'styled-components';

interface ModalProps {
  size?: number;
  full?: boolean;
  fullresp?: boolean;
  height?: string;
  noBackground?: boolean;
}

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ noBackground }) =>
    noBackground ? '' : 'rgba(0, 0, 0, 0.35)'};
  z-index: 999;
  overflow-y: auto;
  align-items: center;
  justify-content: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const appearFromBottom = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const ModalContainer = styled.div<ModalProps>`
  padding-top: 5rem;
  padding: 2rem;
  margin: auto;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (min-width: 769px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ${({ size }) => (size ? `width: ${size}rem` : 'width: 50rem')};
  }

  @media (max-width: 768px) {
    ${({ fullresp }) =>
      fullresp ? `margin-top: 4rem!important;` : 'margin-top: 10rem;'};
  }
`;

export const ModalContent = styled.div<ModalProps>`
  animation: ${appearFromBottom} 0.5s;
  position: relative;
  background: #fff;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  border-radius: 1rem;
  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
  z-index: 999 !important;
  ${({ height }) => height && `height: ${height}`};
`;

export const ButtonClose = styled.div`
  animation: ${appearFromBottom} 0.5s;
  position: absolute;
  top: 5rem;
  right: 4.5rem;
  z-index: 999999;
  cursor: pointer;
  transition: 0.5s;

  img {
    color: #121212;
    opacity: 37%;
  }

  &:hover {
    transition: 0.5s;
    background: #ddd;
    border-radius: 50%;

    img {
      transition: 0.5s;
      color: #fff;
      opacity: 1;
    }
  }
`;
