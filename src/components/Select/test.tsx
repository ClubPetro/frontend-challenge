import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import Select from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Select />', () => {
  it('should render the select', () => {
    const options = ['Option 1', 'Option 2']

    renderWithTheme(
      <Select placeholder="Select placeholder" options={options} />
    )

    expect(screen.getByRole('button', { name: /open/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /open/i }))

    expect(screen.getByText(/option 1/i)).toBeInTheDocument()
  })
})
