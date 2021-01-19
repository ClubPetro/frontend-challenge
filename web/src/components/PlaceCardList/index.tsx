import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import PlaceCard from '../PlaceCard';

import { Container } from './styles';

export interface Place {
  country: {
    name: string;
    flag: string;
  };
  place: string;
  goal: string;
}


const PlaceCardList: React.FC = () => {
  
  const [places, setPlaces] = useState<Place[]>([]);

  const loadCountries = async() => {
    const response = await api.get("/");

    setPlaces(response.data);

    console.log(response.data);
  }

  useEffect(() => {
    
    loadCountries();
  }, []);


  return (
    <Container>
      {places.map(place => (
        <PlaceCard key={place.country.name} data={place} />
      ))}
    </Container>
  )
}

export default PlaceCardList;