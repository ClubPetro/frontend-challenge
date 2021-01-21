import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import getValidationErrors from '../../utils/getValidationErrors';
import Select from '../../components/Select';
import UpdateDialogButton from '../../components/UpdateDialogButton';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import imgEdit from '../../assets/edit.svg';
import imgDelete from '../../assets/delete.svg';
import {
  Header,
  SearchArea,
  CardsArea,
  FormInputMask,
  FormInput,
} from './styles';

interface RestCountries {
  flag: string;
  translations: {
    br: string;
  };
}

interface Country {
  id: string;
  flag: string;
  country: string;
  local: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const [apiData, setApiData] = useState<RestCountries[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function getRestCountries(): Promise<void> {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      setApiData(response.data);
    }
    getRestCountries();
  }, []);

  useEffect(() => {
    async function getCountriesApi(): Promise<void> {
      const response = await api.get('countries');
      setCountries(response.data);
    }
    getCountriesApi();
  }, []);

  const selectOptions = useMemo(
    () =>
      apiData.map(item => ({
        value: item.translations.br,
        label: item.translations.br,
      })),
    [apiData],
  );

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      try {
        const schema = Yup.object().shape({
          country: Yup.string().required('Campo obrigatório.'),
          local: Yup.string().required('Campo obrigatório.'),
          date: Yup.string().required('Campo obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const selectedCountry = apiData.find(
          item => item.translations.br === data.country,
        );

        const country = {
          id: uuid(),
          flag: selectedCountry?.flag,
          ...data,
        };

        await api.post('countries', country);

        setCountries([...countries, country]);
        reset();
      } catch (err) {
        const error = getValidationErrors(err);

        formRef.current?.setErrors(error);
      }
    },
    [apiData, countries],
  );

  const hendleDeleteCountry = useCallback(
    async id => {
      const teste = countries.filter(item => item.id !== id);

      api.delete(`countries/${id}`);
      setCountries(teste);
    },
    [countries],
  );

  const handleUpdateCountry = useCallback(async () => {
    const response = await api.get('countries');

    setCountries(response.data);
  }, []);

  return (
    <div>
      <Header>
        <img src={logoImg} alt="Logo" />
      </Header>
      <SearchArea>
        <Form onSubmit={handleSubmit}>
          <div>
            <span>País</span>
            <Select
              name="country"
              placeholder="Selecione..."
              options={selectOptions}
            />
          </div>

          <div>
            <span>Local</span>
            <FormInput
              name="local"
              placeholder="Digite o local que deseja conhecer"
              large
            />
          </div>

          <div>
            <span>Meta</span>
            <FormInputMask name="date" placeholder="mês/ano" mask="99/9999" />
          </div>
          <button type="submit">Adicionar</button>
        </Form>
      </SearchArea>
      <CardsArea>
        <ul>
          {countries.map(item => (
            <li key={item.id}>
              <img src={item.flag} alt={item.country} />
              <strong>{item.country}</strong>
              <hr />
              <p>
                local:
                {item.local}
              </p>
              <p>
                meta:
                {item.date}
              </p>
              <div>
                <UpdateDialogButton
                  countries={countries}
                  handleUpdateCountry={handleUpdateCountry}
                  itemId={item.id}
                >
                  <img src={imgEdit} alt="editar" />
                </UpdateDialogButton>

                <button
                  type="button"
                  onClick={() => hendleDeleteCountry(item.id)}
                >
                  <img src={imgDelete} alt="excluir" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </CardsArea>
    </div>
  );
};

export default Dashboard;
