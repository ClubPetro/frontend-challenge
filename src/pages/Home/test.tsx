import React from 'react'
import { screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import { api } from '../../services/api'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

jest.mock('../../hooks/travels', () => {
  return {
    useTravel: () => ({
      removeTravel: jest.fn(),
      updateTravel: jest.fn(),
      travels: [
        {
          id: 1,
          country_name: 'Country',
          country_flag_url: '/img/country.png',
          local: 'Local',
          target: 'Target',
        },
      ],
      setMultipleTravels: jest.fn(),
      setTravel: jest.fn(),
    }),
  }
})

const fakeCountriesResult = {
  data: [
    {
      id: 1,
      country_name: 'Country',
      country_flag_url: '/img/country.png',
      local: 'Local',
      target: 'Target',
    },
  ],
}

const fakeCountrySelectedResult = {
  data: [
    {
      flag: 'img/flag.png',
      translations: {
        br: 'Country',
      },
    },
  ],
}

describe('<Home />', () => {
  it('should render the Home', async () => {
    const apiGetSpy = jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce(fakeCountriesResult)

    const axiosGetSpy = jest
      .spyOn(axios, 'get')
      .mockResolvedValue(fakeCountrySelectedResult)

    await act(async () => {
      renderWithTheme(<Home />)
    })

    expect(axiosGetSpy).toBeCalledWith('https://restcountries.eu/rest/v2/all')

    expect(apiGetSpy).toBeCalledWith('/travels')

    expect(
      screen.getByRole('img', {
        name: 'Logo lugares que eu gostaria de conhecer',
      })
    ).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/selecione.../i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/digite o local que deseja conhecer/i)
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/mês\/ano/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /adicionar/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /country/i })
    ).toBeInTheDocument()
  })
})
