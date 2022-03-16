import { Tooltip } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { CardProps, CountriesResponse } from '../../types';
import ConfirmationModal from '../ConfirmationModal';
import EditModal from '../EditModal';

import { CloseIcon, Container, ContentContainer, EditIcon, Line, Options } from './styles';

const Card: React.FC<CardProps> = ({countryId, onUpdate}) => {
  const [country, setCountry] = useState<CountriesResponse>({} as CountriesResponse);
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const getCountry = useCallback(() => {
    api.get(`/countries/${countryId}`).then((response)=>{
      setCountry(response.data)
    }).catch((err) => console.log(err));
  },[countryId])

  useEffect(() => {
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
          <EditIcon  onClick={() => setOpen(true)} cursor="pointer" />
        </Tooltip>
        <Tooltip title="Delete">
          <CloseIcon fontSize='small' cursor="pointer" onClick={() => setOpenDelete(true)} style={{color:"#868686"}}/>
        </Tooltip>
      </Options>

      <ContentContainer>
        {country &&
          <div className="country-container">
            <img alt="flag" src={country.flag}/>
            <h1>{country.name?.toUpperCase()}</h1>
            <Line/>
          </div>
        }

        <div className="local">
          <span className="localText" >Local: {country.local}</span>
          <span className="metaText">Meta: {country.meta}</span>
        </div>
      </ContentContainer>
        
      <ConfirmationModal onDelete={() => deleteCountry()} open={openDelete} onClose={() => setOpenDelete(false)}/>
      <EditModal onUpdate={() => handleUpdate()} open={open} countryId={countryId} onClose={()=> setOpen(false)}/>
    </Container>
  )}

export default Card;