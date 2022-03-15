import { Close, Edit } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { CountriesResponse } from '../../types';
import EditModal from '../EditModal';

import { Container, ContentContainer, Line, Options } from './styles';

interface CardProps{
  countryId: number;
  onUpdate: () => void;
}

const Card: React.FC<CardProps> = ({countryId, onUpdate}) => {
  const [country, setCountry] = useState<CountriesResponse>({} as CountriesResponse);
  const [open, setOpen] = useState<boolean>(false);

  const getCountry = useCallback(() => {
    api.get(`/countries/${countryId}`).then((response)=>{
      console.log('name', response)
      setCountry(response.data)
    }).catch((err) => console.log(err));
  },[countryId])

  useEffect(() => {
    console.log('entrei aqui');
    getCountry();
  },[getCountry])

  const handleUpdate = () => {
    onUpdate();
    getCountry();
  }

  const deleteCountry = () => {
    api.delete(`countries/${countryId}`).then((response) => {
      console.log(response);
      onUpdate();
    })
  }

  return (
    <Container>
      <Options>
        <Tooltip title="Edit">
          <Edit onClick={() => setOpen(true)} cursor="pointer" style={{marginRight: '16px', color:"#868686"}}/>
        </Tooltip>
        <Tooltip title="Delete">
          <Close cursor="pointer" onClick={() => deleteCountry()} style={{color:"#868686"}}/>
        </Tooltip>
      </Options>

      
      {country &&
        <>
          <img alt="flag" src={country.flag}/>
          <h1>{country.name?.toUpperCase()}</h1>
        </>
      }
     
      <Line/>

      <ContentContainer>
        <span className="localText" >Local: {country.local}</span>
        <span className="metaText">Meta: {country.meta}</span>
      </ContentContainer>
      
      <EditModal onUpdate={() => handleUpdate()} open={open} countryId={countryId} onClose={()=> setOpen(false)}/>
    </Container>
  )}

export default Card;