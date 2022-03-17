import { Skeleton, Tooltip } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { CardProps, CountriesResponse } from '../../types';
import ConfirmationModal from '../ConfirmationModal';
import EditModal from '../EditModal';

import { CloseIcon, Container, ContentContainer, EditIcon, Line, Options, SkeletonContainer } from './styles';

const Card: React.FC<CardProps> = ({countryId, onUpdate}) => {
  const [country, setCountry] = useState<CountriesResponse>({} as CountriesResponse);
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountry = useCallback(() => {
    setLoading(true);
    api.get(`/countries/${countryId}`).then((response)=>{
      setCountry(response.data)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    });
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
    <>
    {!loading ? (
      <Container>
        <Options>
          <Tooltip title="Edit">
            <EditIcon data-testid="edit-button" onClick={() => setOpen(true)} cursor="pointer" />
          </Tooltip>
          <Tooltip title="Delete">
            <CloseIcon  data-testid="close-button" fontSize='small' cursor="pointer" onClick={() => setOpenDelete(true)}/>
          </Tooltip>
        </Options>

        <ContentContainer data-testid="container-content">
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
    ):(
      <SkeletonContainer>
        <Skeleton width={250} height={417}/>
      </SkeletonContainer>
    )}
    </>
  )}

export default Card;