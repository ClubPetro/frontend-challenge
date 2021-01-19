import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.small};
  `}
`

export const Icon = styled.img`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    margin-right: ${theme.spacings.xsmall};
  `}
`

export const Center = styled.div`
  display: flex;
  align-items: center;
`
