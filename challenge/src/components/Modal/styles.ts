import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 40rem;
    background: ${theme.colors.white};
    border-radius: ${theme.radius.large};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.spacings.small};
      border-bottom: 0.1rem solid ${theme.colors.lightGray};

      > button {
        background: transparent;
      }
    }

    > div {
      padding: ${theme.spacings.small};
    }
  `}
`;
