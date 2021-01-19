import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'
import Card from '.'

describe('<Card />', () => {
  it('should render the card', () => {
    const callback = jest.fn()

    renderWithTheme(
      <Card
        countryName="Country"
        flag="/img/country.png"
        local="Local"
        target="Target"
        onEdit={callback}
        onRemove={callback}
      />
    )

    expect(
      screen.getByRole('heading', { name: /country/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/img/country.png')
    expect(screen.getByText(/local/i)).toBeInTheDocument()
    expect(screen.getByText(/target/i)).toBeInTheDocument()

    const editButton = screen.getByLabelText(/edit card button/i)
    const removeButton = screen.getByLabelText(/remove card button/i)

    fireEvent.click(editButton)
    expect(callback).toBeCalled()

    fireEvent.click(removeButton)
    expect(callback).toBeCalled()
  })
})
