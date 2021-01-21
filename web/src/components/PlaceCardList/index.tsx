import React, {useCallback, useEffect,useRef,useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { v4 as uuid } from 'uuid';
import InputMask from 'react-input-mask';
import axios from 'axios';


import PlaceCard from '../PlaceCard';
import Input from '../Input';
import SelectInput from '../SelectInput';
import api from '../../services/api';
import customStyles from '../SelectInput/customStyles';

import { ListContainer, FormContainer } from './styles';

export interface Place {
  id: string;
  country: {
    name: string;
    flag: string;
  };
  place: string;
  goal: string;
}

interface FormObject {
  id: string;
  country: {
    name: string;
    flag: string;
  },
  place: string;
  goal: string;
}

export interface ResponseCountry {
  flag: string;
  translations: {
    pt: string;
  },
}

interface FilteredCountry {
  flag: string;
  name: string;
}


const PlaceCardList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [countries, setCountries] = useState<FilteredCountry[]>([]);

  const placesResponse = useCallback(async () => {
    const response = await api.get("/");
    setPlaces(response.data);
  },[]);

  useEffect(() => {
    placesResponse();
  }, [placesResponse])

  
  
  const loadCountries = useCallback(async() =>{
    const response = await axios.get("https://restcountries.eu/rest/v2/all");

      const countriesList = response.data.map((country: ResponseCountry) => {

        return {
          flag: country.flag,
          name: country.translations.pt
        }; ;
      });

      setCountries(countriesList);
  }, []);

  const options = countries.map(country => ({
    value: {
      name: country.name,
      flag: country.flag,
    },

    label: country.name
  }));

  const handleSubmit = useCallback(
    async(data: FormObject) => {
      console.log(data);
      await api.post("/", {...data, id: uuid()});
      formRef.current?.reset();
      placesResponse();
      
  },[placesResponse]);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <div className="field-group">
            <label>País</label>
            <SelectInput 
              name="country" 
              cachedOptions
              options={options}
              style={customStyles}
            />
          </div>

          <div className="field-group">
            <label>Local</label>
            <Input 
            name="place" 
            placeholder="Digite o local que deseja conhecer"  
            id="place" />
          </div>

          <div className="field-group">
            <label>Meta</label>
            <InputMask mask="99/9999">
            {() => <Input 
            name="goal" 
            placeholder="mês/ano" 
            id="goal"/>}
            </InputMask>
          </div>

          <button type="submit">Adicionar</button>
        </Form>
      </FormContainer>

      <ListContainer>
        {places.map(place => (
          <PlaceCard key={place.id} data={place} />
        ))}
      </ListContainer>
    </>
  )
}

export default PlaceCardList;