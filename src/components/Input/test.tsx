import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'
import Input from '.'

describe('<Input />', () => {
  it('should render a regular input', () => {
    renderWithTheme(<Input mask="" placeholder="Input placeholder" />)

    expect(
      screen.getByPlaceholderText(/input placeholder/i)
    ).toBeInTheDocument()
  })

  it('should render a small size input', () => {
    const { container } = renderWithTheme(
      <Input inputSize="small" mask="" placeholder="Input placeholder" />
    )

    expect(container.firstChild).toHaveStyle({
      height: '4rem',
    })
  })

  it('should render a large size input', () => {
    const { container } = renderWithTheme(
      <Input inputSize="large" mask="" placeholder="Input placeholder" />
    )

    expect(container.firstChild).toHaveStyle({
      height: '5.6rem',
    })
  })

  it('should render a full width input', () => {
    const { container } = renderWithTheme(
      <Input fullWidth mask="" placeholder="Input placeholder" />
    )

    expect(container.firstChild).toHaveStyle({
      width: '100%',
    })
  })

  it('should render error red border-bottom', () => {
    const { container } = renderWithTheme(
      <Input error={true} mask="" placeholder="Input placeholder" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'border-bottom',
      '0.3rem solid red',
      {
        modifier: '::before',
      }
    )
  })

  it('should render a outlined input', () => {
    const { container } = renderWithTheme(
      <Input outline mask="" placeholder="Input placeholder" />
    )

    expect(container.firstChild).toHaveStyle({
      border: '1px solid #ABABAB',
    })
  })
})
