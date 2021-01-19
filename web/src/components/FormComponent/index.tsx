import axios from 'axios';
import React, {useEffect,useState } from 'react';
import { Form } from '@unform/web';
import InputMask from 'react-input-mask';

import Input from '../Input';

import { Container } from './styles';
import SelectInput from '../SelectInput';
import api from '../../services/api';
import customStyles from '../SelectInput/customStyles';

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



const FormComponent: React.FC = () => {
  const [countries, setCountries] = useState<FilteredCountry[]>([]);

  useEffect(() => {
    const loadCountries = async() => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");

      const countriesList = response.data.map((country: ResponseCountry) => {

        return {
          flag: country.flag,
          name: country.translations.pt
        }; ;
      });

      setCountries(countriesList);
    }
    loadCountries();
  }, []);

  const options = countries.map(country => ({
    value: {
      name: country.name,
      flag: country.flag,
    },

    label: country.name
  }));

  return (
    <Container>
      <Form onSubmit={() => {}}>
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
    </Container>
  );
}

export default FormComponent;