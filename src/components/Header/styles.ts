import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 8.4rem;
    background: ${theme.colors.black};

    img {
      height: 100%;
    }
  `}
`

export const Mid = styled.div`
  ${({ theme }) => css`
    height: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`
