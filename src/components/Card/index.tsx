import { Close, Edit } from '@mui/icons-material';
import React, { useCallback, useEffect, useState } from 'react';
import countriesApi from '../../services/countriesApi';
import { Country } from '../../types';

import { Container, ContentContainer, Line, Options } from './styles';

interface CardProps{
  countryName: string;
}

const Card: React.FC<CardProps> = ({countryName}) => {
  const [country, setCountry] = useState<Country>();

  const getCountry = useCallback(() => {
    countriesApi.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((response)=>{
      console.log('name', response)
      setCountry(response.data[0])
    }).catch((err) => console.log(err));
  },[countryName])

  useEffect(() => {
    getCountry();
  },[getCountry])


  return (
    <Container>
      <Options>
        <Edit style={{marginRight: '16px', color:"#868686"}}/>
        <Close style={{color:"#868686"}}/>
      </Options>

      
      {country &&
        <>
          <img alt="flag" src={country.flags.svg}/>
          <h1>{country.translations.por.common.toUpperCase()}</h1>
        </>
      }
     
      <Line/>

      <ContentContainer>
        <span className="localText" >Local: Balneario Camboriu</span>
        <span className="metaText">Meta: 04/2022</span>
      </ContentContainer>
    </Container>
  )}

export default Card;