import React, { useEffect } from 'react'

import { useTravel } from '../../hooks/travels'
import { fetchTravels } from '../../services/api'

import Cards from '../../components/Cards'
import Header from '../../components/Header'
import Search from '../../components/Search'

import * as S from './styles'

const Home = () => {
  const { travels, setMultipleTravels } = useTravel()

  useEffect(() => {
    const getTravels = async () => {
      const fetchedTravels = await fetchTravels()

      fetchedTravels && setMultipleTravels(fetchedTravels)
    }

    getTravels()
  }, [setMultipleTravels])

  return (
    <S.Wrapper>
      <Header
        img="/img/logo-lugares.png"
        imgAltText="Logo lugares que eu gostaria de conhecer"
      />
      <Search />
      <S.Content>
        <Cards travels={travels} />
      </S.Content>
    </S.Wrapper>
  )
}

export default Home
