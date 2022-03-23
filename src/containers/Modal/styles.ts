import styled from 'styled-components';

interface WrapperProps {
  open: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  height: 270px;
  background: #fff;
  top: 50%;
  width: 350px;
  left: 50%;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #c5c5c5;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  ${({ open }) => (!open ? `display: none` : `display: flex`)};
  flex-direction: column;
  justify-content: center;

  > img {
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
  }

  span:nth-child(4) {
    margin-top: 10px;
  }
`;
