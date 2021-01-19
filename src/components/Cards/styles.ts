import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'

import media from 'styled-media-query'

import * as InputStyles from '../Input/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: ${theme.grid.gutter};
    width: 100%;
    justify-items: center;

    ${media.greaterThan('huge')`
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;
    `}

    padding: ${theme.spacings.xxlarge} ${theme.spacings.large};

    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`

export const StyledDialogContent = styled(DialogContent)`
  ${({ theme }) => css`
    ${InputStyles.Wrapper} + ${InputStyles.Wrapper} {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const StyledDialogContentText = styled(DialogContentText)`
  font-size: 1.6rem;
`

export const StyledDialogTitle = styled(DialogTitle)`
  h2 {
    font-size: 1.6rem;
  }
`

export const StyledButton = styled(Button)`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
  `}
`

export const NoResults = styled.h3`
  ${({ theme }) => css`
    grid-column: 1/-1;
    padding: ${theme.spacings.xxlarge} 0;
    color: ${theme.colors.lightGray};
  `}
`
