import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 25rem));
  grid-gap: 3rem 3.3rem;
  max-width: 140rem;
  margin: 0 auto;
  place-content: center;
  margin-bottom: 10rem;
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

export const Card = styled.div`
  animation: ${appearFromBottom} 0.7s;
  position: relative;
  padding: 2.6rem 1.4rem;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0px 5px 4px 0px #c8c8c8;
`;

export const Image = styled.img`
  max-width: 5.6rem;
  margin-top: -1.4rem;
`;

export const ActionIcons = styled.div`
  img {
    transition: 0.3s;
    cursor: pointer;
  }

  img:hover {
    transition: 0.3s;
    filter: brightness(1.5);
  }
`;
