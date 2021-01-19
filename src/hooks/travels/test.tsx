import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import { TravelProvider, useTravel } from '.'
import { api } from '../../services/api'

describe('Travels hook', () => {
  it('should be able to set places', async () => {
    const { result } = renderHook(() => useTravel(), {
      wrapper: TravelProvider,
    })

    const travels = [
      {
        id: 1,
        country_name: 'Country',
        country_flag_url: '/img/country.png',
        local: 'Local',
        target: 'Target',
      },
      {
        id: 2,
        country_name: 'Country2',
        country_flag_url: '/img/country.png',
        local: 'Local2',
        target: 'Target2',
      },
    ]

    await act(async () => {
      result.current.setMultipleTravels(travels)
    })

    expect(result.current.travels).toEqual(travels)
  })

  it('should be able to add a place', async () => {
    const { result } = renderHook(() => useTravel(), {
      wrapper: TravelProvider,
    })

    const apiPostSpy = jest.spyOn(api, 'post').mockResolvedValue({
      data: {
        country_flag_url: '/img/country.png',
        country_name: 'Country',
        local: 'Local',
        target: 'Target',
        id: 1,
      },
    })

    const country = {
      id: 1,
      country_name: 'Country',
      country_flag_url: '/img/country.png',
      local: 'Local',
      target: 'Target',
    }

    await act(async () => {
      result.current.setTravel(country)
    })

    expect(apiPostSpy).toBeCalledWith('/travels', {
      country_flag_url: '/img/country.png',
      country_name: 'Country',
      local: 'Local',
      target: 'Target',
    })

    expect(result.current.travels).toEqual([country])
  })

  it('should be able to remove a place', async () => {
    const { result } = renderHook(() => useTravel(), {
      wrapper: TravelProvider,
    })

    const apiDeleteSpy = jest.spyOn(api, 'delete').mockResolvedValue(true)

    const travels = [
      {
        id: 1,
        country_name: 'Country',
        country_flag_url: '/img/country.png',
        local: 'Local',
        target: 'Target',
      },
      {
        id: 2,
        country_name: 'Country2',
        country_flag_url: '/img/country.png',
        local: 'Local2',
        target: 'Target2',
      },
    ]

    await act(async () => {
      result.current.setMultipleTravels(travels)
    })

    await act(async () => {
      result.current.removeTravel(2)
    })

    expect(apiDeleteSpy).toBeCalledWith('/travels/2')

    expect(result.current.travels).toHaveLength(1)
  })

  it('should be able to update a place', async () => {
    const { result } = renderHook(() => useTravel(), {
      wrapper: TravelProvider,
    })

    const apiPatchSpy = jest.spyOn(api, 'patch').mockResolvedValue({
      data: {
        country_flag_url: '/img/country.png',
        country_name: 'Country',
        local: 'Local',
        target: 'Target',
        id: 1,
      },
    })

    const country = {
      id: 1,
      country_name: 'Country',
      country_flag_url: '/img/country.png',
      local: 'Local',
      target: 'Target',
    }

    await act(async () => {
      result.current.setTravel(country)
    })

    await act(async () => {
      result.current.updateTravel({
        id: 1,
        local: 'Local-Updated',
        target: 'Target-Updated',
      })
    })

    const updatedCountry = {
      id: 1,
      country_name: 'Country',
      country_flag_url: '/img/country.png',
      local: 'Local-Updated',
      target: 'Target-Updated',
    }

    expect(apiPatchSpy).toBeCalledWith('/travels/1', {
      local: 'Local-Updated',
      target: 'Target-Updated',
    })

    expect(result.current.travels[0]).toEqual(updatedCountry)
  })

  it('should NOT be able to update a place if the travel id is not found', async () => {
    const { result } = renderHook(() => useTravel(), {
      wrapper: TravelProvider,
    })

    const apiPatchSpy = jest.spyOn(api, 'patch').mockResolvedValue({
      data: {
        country_flag_url: '/img/country.png',
        country_name: 'Country',
        local: 'Local',
        target: 'Target',
        id: 1,
      },
    })

    const country = {
      id: 1,
      country_name: 'Country',
      country_flag_url: '/img/country.png',
      local: 'Local',
      target: 'Target',
    }

    await act(async () => {
      result.current.setTravel(country)
    })

    await act(async () => {
      result.current.updateTravel({
        id: 2,
        local: 'Local-Updated',
        target: 'Target-Updated',
      })
    })

    const updatedCountry = {
      id: 1,
      country_name: 'Country',
      country_flag_url: '/img/country.png',
      local: 'Local',
      target: 'Target',
    }

    expect(apiPatchSpy).toBeCalledWith('/travels/1', {
      local: 'Local-Updated',
      target: 'Target-Updated',
    })

    expect(result.current.travels[0]).toEqual(updatedCountry)
  })
})
