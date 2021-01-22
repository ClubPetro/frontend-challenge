import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    label {
      display: block;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    input {
      width: 100%;
      height: 4.8rem;
      padding: ${theme.spacings.small};
      border-radius: ${theme.radius.default};
      border: 0.2rem solid transparent;

      &:focus {
        border-color: ${theme.colors.black};
      }

      &::placeholder {
        color: ${theme.colors.gray};
      }
    }
  `}
`;
