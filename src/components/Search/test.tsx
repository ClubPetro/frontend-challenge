import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import Search from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

jest.mock('../../hooks/travels', () => {
  return {
    useTravel: () => ({
      setTravel: jest.fn(),
    }),
  }
})

const fakeResult = {
  data: [
    {
      flag: 'img/flag.png',
      translations: {
        br: 'Country',
      },
    },
  ],
}

describe('<Search />', () => {
  it('should render the search', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValue(fakeResult)

    await act(async () => {
      renderWithTheme(<Search />)
    })

    expect(axiosGetSpy).toBeCalledWith('https://restcountries.eu/rest/v2/all')

    expect(screen.getByPlaceholderText(/selecione.../i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/digite o local que deseja conhecer/i)
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/mês\/ano/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /adicionar/i })
    ).toBeInTheDocument()
  })

  it('should add the item to the array', async () => {
    await act(async () => {
      renderWithTheme(<Search />)
    })

    const select = screen.getByLabelText(/open/i)

    fireEvent.click(select)

    fireEvent.click(screen.getByText(/country/i))

    fireEvent.change(
      screen.getByPlaceholderText(/digite o local que deseja conhecer/i),
      { target: { value: 'Local' } }
    )

    fireEvent.change(screen.getByPlaceholderText(/mês\/ano/i), {
      target: { value: '12/2021' },
    })

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /adicionar/i }))
    })

    expect(
      screen.getByPlaceholderText(/digite o local que deseja conhecer/i)
    ).toHaveValue('')
  })

  it('should NOT add the item to the array', async () => {
    await act(async () => {
      renderWithTheme(<Search />)
    })

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /adicionar/i }))
    })

    expect(
      screen.getByPlaceholderText(/digite o local que deseja conhecer/i)
        .parentElement
    ).toHaveStyleRule('border-bottom', '0.3rem solid red', {
      modifier: '::before',
    })
  })

  it('should throw an error if it fails to load the countries', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('error'))

    const consoleLogSpy = jest.spyOn(console, 'log')

    await act(async () => {
      renderWithTheme(<Search />)
    })

    expect(consoleLogSpy).toBeCalledWith(new Error('error'))
  })
})
