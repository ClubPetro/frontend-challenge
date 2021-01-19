import styled, { css } from 'styled-components'
import Card from '@material-ui/core/Card'
import { Edit, Close } from '@material-ui/icons'

export const Wrapper = styled(Card)`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 0.6fr auto 1fr;

    height: 25rem;
    width: 25rem;

    padding: ${theme.spacings.xsmall};
    border-radius: 1rem;
  `}
`

export const FlagBar = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Bottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 ${theme.spacings.xxsmall};

    p + p {
      margin-top: calc(${theme.spacings.xxsmall} + 0.4rem);
    }
  `}
`

export const Separator = styled.hr`
  ${({ theme }) => css`
    border: 0;
    border-top: 1px solid ${theme.colors.lightGray};
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const ActionsBar = styled.div`
  ${({ theme }) => css`
    svg + svg {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const Country = styled.div`
  ${({ theme }) => css`
    max-width: 80%;

    ${CountryName} {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const CountryFlag = styled.img`
  width: 5.6rem;
  height: 3.4rem;
`

export const CountryName = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
  `}
`

export const EditIcon = styled(Edit)`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.gray};
    cursor: pointer;
  `}
`

export const CloseIcon = styled(Close)`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.gray};
    cursor: pointer;
  `}
`
