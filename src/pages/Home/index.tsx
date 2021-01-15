/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { uuid } from 'uuidv4';

import Select from '../../components/Select';
import Header from '../../components/Header';
import Input from '../../components/Input';
import InputDate from '../../components/InputDate';
import MetaItem from '../../components/MetaItem';

import api from '../../services/api';

import { Container, InputContainer, Button, ResultContainer } from './styles';

interface Countries {
  value: string;
}

interface Meta {
  country: string;
  local: string;
  date: string;
  flag: string;
  id: string;
}

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [meta, setMeta] = useState<Meta[]>([]);

  useEffect(() => {
    async function loadCountries() {
      const response = await api.get('/all');

      const { data } = response;

      const list = Array.from(data).map((d: any) => {
        return {
          value: d.name,
        };
      });

      setCountries(list);
    }
    loadCountries();
  }, []);

  async function handleForm(data: Meta, { reset }: any) {
    const { country, local, date } = data;

    const response = await api.get(`/name/${country}`);
    const list = response.data.reduce((acc: any, cur: any, i: any) => {
      acc[i] = cur;
      return acc;
    }, {});

    if (response) {
      const resultCountry = {
        country,
        local,
        date,
        flag: list[0].flag,
        id: uuid(),
      };
      setMeta([...meta, resultCountry]);
    } else {
      console.log('Ocorreu um erro na busca');
    }
    reset();
  }

  function handleDelete(id: string) {
    const deleteMeta = meta.filter(m => m.id !== id);
    setMeta([...deleteMeta]);
  }

  function handleEdit(data: any, i: any) {
    const { local, date } = data;

    setMeta(oldState =>
      oldState.map(meta => {
        if (meta.id === i) {
          return {
            ...meta,
            local,
            date,
          };
        }

        return meta;
      }),
    );
  }

  return (
    <Container>
      <Header />
      <Form onSubmit={handleForm}>
        <InputContainer>
          <Select name="country">
            <option selected disabled>
              Selecione...
            </option>
            {countries.map(({ value }) => (
              <option key={value}>{value}</option>
            ))}
          </Select>
          <Input
            label="Local:"
            name="local"
            placeholder="Digite o local que deseja conhecer"
          />
          <InputDate
            name="date"
            placeholder="mês/ano"
            mask="99/9999"
            label="Meta:"
          />

          <Button type="submit">
            <span>Adicionar</span>
          </Button>
        </InputContainer>
      </Form>

      <ResultContainer>
        {meta.map(m => (
          <MetaItem
            key={m.id}
            id={m.id}
            flag={m.flag}
            country={m.country}
            local={m.local}
            date={m.date}
            toDelete={handleDelete}
            toEdit={handleEdit}
          />
        ))}
      </ResultContainer>
    </Container>
  );
};

export default Home;
