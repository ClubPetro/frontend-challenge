import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 1.25rem;
  text-align: center;

  span {
    background: #fa5858;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    width: 10rem;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #fa5858 transparent;
      border-width: 0.375rem 0.375rem 0 0.375rem;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
