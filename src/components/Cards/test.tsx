import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import Cards from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import { act } from 'react-dom/test-utils'

jest.mock('../../hooks/travels', () => {
  return {
    useTravel: () => ({
      updateTravel: jest.fn(),
      removeTravel: jest.fn(),
      setMultipleTravels: jest.fn(),
    }),
  }
})

const travels = [
  {
    id: 1,
    country_name: 'Country',
    country_flag_url: '/img/country.png',
    local: 'Local',
    target: 'Target',
  },
]

describe('<Cards />', () => {
  it('should render the cards properly', async () => {
    const { container } = renderWithTheme(<Cards travels={travels} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', '/img/country.png')

    expect(
      screen.getByRole('heading', { name: /country/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should open a modal if card edit button is clicked', async () => {
    renderWithTheme(<Cards travels={travels} />)

    const editButton = screen.getByLabelText(/edit card button/i)

    fireEvent.click(editButton)

    expect(
      screen.getByText(
        'Digite os dados abaixo para atualizar o lugar que você quer conhecer'
      )
    ).toBeInTheDocument()
  })

  it('should open a modal if card remove button is clicked', async () => {
    renderWithTheme(<Cards travels={travels} />)

    const removeButton = screen.getByLabelText(/remove card button/i)

    fireEvent.click(removeButton)

    expect(
      screen.getByText(
        'Ao excluir esse lugar não será possível mais recuperá-lo. Deseja seguir com essa ação?'
      )
    ).toBeInTheDocument()
  })

  it('should hide the modal if close button is clicked', async () => {
    renderWithTheme(<Cards travels={travels} />)

    const editButton = screen.getByLabelText(/edit card button/i)

    fireEvent.click(editButton)

    const localInput = screen.getByPlaceholderText(/local/i)

    const closeButton = screen.getByLabelText(/close modal/i)

    fireEvent.click(closeButton)

    expect(localInput).not.toBeInTheDocument()
  })

  it('should be able to update the card if edit modal is confirmed with valid values', async () => {
    renderWithTheme(<Cards travels={travels} />)

    const editButton = screen.getByLabelText(/edit card button/i)

    await act(async () => {
      fireEvent.click(editButton)
    })

    const localInput = screen.getByPlaceholderText(/local/i)
    const targetInput = screen.getByPlaceholderText(/mês\/ano/i)

    fireEvent.change(localInput, { target: { value: 'Local' } })
    fireEvent.change(targetInput, { target: { value: '01/2021' } })

    const confirmButton = screen.getByLabelText(/confirm modal/i)

    await act(async () => {
      fireEvent.click(confirmButton)
    })

    expect(targetInput).not.toBeInTheDocument()
  })

  it('should NOT be able to update the card if edit modal is confirmed with invalid values', async () => {
    renderWithTheme(<Cards travels={travels} />)

    const editButton = screen.getByLabelText(/edit card button/i)

    fireEvent.click(editButton)

    const confirmButton = screen.getByLabelText(/confirm modal/i)

    await act(async () => {
      fireEvent.click(confirmButton)
    })

    expect(screen.getByPlaceholderText(/local/i).parentElement).toHaveStyleRule(
      'border-bottom',
      '0.3rem solid red',
      {
        modifier: '::before',
      }
    )
  })

  it('should be able to remove the selected card', async () => {
    renderWithTheme(<Cards travels={travels} />)

    const removeButton = screen.getByLabelText(/remove card button/i)

    fireEvent.click(removeButton)

    const confirmButton = screen.getByLabelText(/confirm modal/i)

    await act(async () => {
      fireEvent.click(confirmButton)
    })

    expect(confirmButton).not.toBeInTheDocument()
  })

  it('should render a message if there is no travels available', async () => {
    renderWithTheme(<Cards travels={[]} />)

    expect(
      screen.getByText(/não há resultados disponíveis/i)
    ).toBeInTheDocument()
  })
})
