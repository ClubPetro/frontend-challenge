import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'
import Item from '.'

describe('<Item />', () => {
  it('should render the item', () => {
    renderWithTheme(<Item>Item</Item>)

    expect(screen.getByText(/item/i)).toBeInTheDocument()
  })

  it('should render a item with an icon', () => {
    renderWithTheme(<Item icon="/img/icon.png">Item</Item>)

    expect(screen.getByRole('img')).toHaveAttribute('src', '/img/icon.png')
  })
})
