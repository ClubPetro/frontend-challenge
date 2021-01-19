import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from '.'

type WrapperProps = Pick<
  InputProps,
  'inputSize' | 'fullWidth' | 'error' | 'outline'
>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  small: () => css`
    height: 4rem;
  `,

  medium: () => css`
    height: 4.8rem;
  `,

  large: () => css`
    height: 5.6rem;
  `,

  error: () => css`
    border-bottom: 0.3rem solid red;
    transform: scaleX(1);
  `,

  outline: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.lightGray};
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, fullWidth, inputSize, error, outline }) => css`
    position: relative;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    font-size: ${theme.font.sizes.medium};

    background-color: ${theme.colors.white};

    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!inputSize && wrapperModifiers[inputSize]()};
    ${!!outline && wrapperModifiers.outline(theme)};

    &::before {
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      position: absolute;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-bottom: 0.3rem solid ${theme.colors.secondary};
      transform: scaleX(0);
      pointer-events: none;

      ${!!error && wrapperModifiers.error()}
    }

    &:focus-within:before {
      transform: scaleX(1);
    }

    > input {
      height: 100%;
      width: 100%;
      padding: ${theme.spacings.xsmall};
      border: 0;
      outline: 0;
    }
  `}
`
