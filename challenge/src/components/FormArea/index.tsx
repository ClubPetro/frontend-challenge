import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';

import Container from '../Container';
import Input from '../Input';
import Select from '../Select';

import * as S from './styles';

export interface Country {
  translations: {
    br: string;
  };
}

export default function FormArea() {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountriesData = useCallback(async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');

    setCountries(response.data);
  }, []);

  useEffect(() => {
    getCountriesData();
  }, [getCountriesData]);

  return (
    <S.Wrapper>
      <Container>
        <form>
          <Select
            options={countries.map(country => ({
              value: country.translations.br,
              label: country.translations.br,
            }))}
            label="País"
            id="countries"
          />
          <Input
            id="local"
            label="Local"
            placeholder="Digite o local que deseja conhecer"
          />
          <Input id="goal" label="Meta" placeholder="mês/ano" />
          <button type="submit">Adicionar</button>
        </form>
      </Container>
    </S.Wrapper>
  );
}
