import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'
import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Header img="header-image.png" imgAltText="Image alternative text" />
    )

    expect(
      screen.getByRole('img', { name: 'Image alternative text' })
    ).toBeInTheDocument()
  })
})
