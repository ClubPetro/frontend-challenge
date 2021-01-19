import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'

import { useTravel } from '../../hooks/travels'

import Input from '../Input'
import Item from '../Item'
import Select from '../Select'

import * as S from './styles'

export type CountryProps = {
  flag: string
  translations: {
    br: string
  }
}

export type CountriesProps = Array<CountryProps>

type FormErrorProps = {
  [key: string]: boolean
}

const Search = () => {
  const [local, setLocal] = useState('')
  const [target, setTarget] = useState('')
  const [formErrors, setFormErrors] = useState<FormErrorProps>(
    {} as FormErrorProps
  )
  const [country, setCountry] = useState<CountryProps | null>(null)
  const [countries, setCountries] = useState<CountriesProps>([])
  const { setTravel } = useTravel()

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setFormErrors({} as FormErrorProps)

      try {
        const schema = yup.object().shape({
          country_name: yup.string().required(),
          country_flag_url: yup.string().required(),
          local: yup.string().required(),
          target: yup
            .string()
            .required()
            .matches(
              /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/
            ),
        })

        await schema.validate(
          {
            country_name: country?.translations.br,
            country_flag_url: country?.flag,
            local,
            target,
          },
          { abortEarly: false }
        )

        setTarget('')
        setLocal('')
        setCountry({
          flag: '',
          translations: {
            br: '',
          },
        })

        country &&
          setTravel({
            country_name: country.translations.br,
            country_flag_url: country.flag,
            local: local,
            target: target,
            id: 1,
          })
      } catch (err) {
        const error = err.errors.map((error: string) => {
          const field = error.split(' ')[0]

          return field
        })

        const obj = Object.fromEntries(
          error.map((error: string) => [error, true])
        )

        setFormErrors(obj)
      }
    },
    [country, local, setTravel, target]
  )

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios.get('https://restcountries.eu/rest/v2/all')

        setCountries(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    getCountries()
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <S.SearchWrapper onSubmit={handleSubmit}>
          <S.SearchField>
            <S.SearchFieldLabel>País</S.SearchFieldLabel>
            <Select
              options={countries}
              noOptionsText="Não foi encontrado nenhum país :("
              getOptionLabel={(option: CountryProps) => option.translations.br}
              renderOption={(option: CountryProps) => (
                <Item icon={option.flag}>{option.translations.br}</Item>
              )}
              getOptionSelected={(option, value) => option.id === value.id}
              placeholder="Selecione..."
              error={formErrors.country_name}
              disableListWrap
              onChange={(event, newValue) => {
                setCountry(newValue)
              }}
              value={country}
            />
          </S.SearchField>
          <S.SearchField>
            <S.SearchFieldLabel>Local</S.SearchFieldLabel>
            <Input
              mask=""
              inputSize="medium"
              value={local}
              error={formErrors.local}
              onChange={(e) => setLocal(e.target.value)}
              fullWidth
              placeholder="Digite o local que deseja conhecer"
            />
          </S.SearchField>
          <S.SearchField>
            <S.SearchFieldLabel>Meta</S.SearchFieldLabel>
            <Input
              mask="99/9999"
              inputSize="medium"
              error={formErrors.target}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              fullWidth
              placeholder="mês/ano"
            />
          </S.SearchField>
          <S.ButtonField>
            <S.Button type="submit" fullWidth>
              Adicionar
            </S.Button>
          </S.ButtonField>
        </S.SearchWrapper>
      </S.Container>
    </S.Wrapper>
  )
}

export default Search
