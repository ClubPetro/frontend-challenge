import styled, { css } from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    width: 100%;
    background: ${theme.colors.primary};
    padding: ${theme.spacings.medium};

    ${media.greaterThan('large')`
      height: 20.4rem;
    `}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`

export const SearchWrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;

    ${media.greaterThan('large')`
      display: grid;
      grid-gap: ${theme.spacings.medium};
      grid-template-columns: 1.4fr 2fr 1fr 0.8fr;
    `}
  `}
`

export const SearchFieldLabel = styled.label`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    margin-bottom: calc(${theme.spacings.xxsmall} / 2);
  `}
`

export const SearchField = styled.div`
  ${({ theme }) => css`
    flex: 1;
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('large')`
      margin-bottom: 0;
    `}
  `}
`

export const ButtonField = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Button = styled(MuiButton)`
  ${({ theme }) => css`
    height: 4.8rem;
    border-radius: 0.7rem;
    background-color: ${theme.colors.secondary};
    text-transform: initial;
    font-size: 1.6rem;
    color: ${theme.colors.white};
  `}
`
