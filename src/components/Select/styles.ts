import styled, { css } from 'styled-components'

type WrapperProps = {
  error?: boolean
}

const wrapperModifiers = {
  error: () => css`
    .MuiInput-underline:before {
      border-bottom: 3px solid red;
    }

    .MuiAutocomplete-root {
      &:hover {
        .MuiInput-underline:before {
          border-bottom: 3px solid red;
        }
      }
    }

    .MuiInput-underline:after {
      border: 0;
    }
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    .MuiAutocomplete-root {
      height: 4.8rem;
      border-radius: 0.7rem;
      background-color: #fff;
      font-size: 1.6rem;
      overflow: hidden;

      &:hover {
        .MuiInput-underline:before {
          border: 0;
        }
      }
    }

    .MuiFormControl-root {
      height: 100%;
    }

    .MuiAutocomplete-inputRoot {
      border: 0;
      outline: 0;
      height: 100%;
      border-radius: 0.7rem;
      padding: 0 14px;
      border-color: red;
    }

    .MuiAutocomplete-endAdornment {
      > button > span > svg {
        height: 2rem;
        width: 2rem;
      }
    }

    .MuiAutocomplete-input {
      height: 100%;
      box-sizing: border-box;
      font-size: 1.6rem;
    }

    .MuiInput-underline:before {
      border-radius: 0.7rem;
      border: 0;
    }

    .MuiInput-underline:after {
      border-radius: 0.7rem;
      border-color: ${theme.colors.secondary};
    }

    ${!!error && wrapperModifiers.error()}
  `}
`
