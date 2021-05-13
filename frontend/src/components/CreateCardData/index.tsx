import { useCallback, useMemo, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';

import InputMask from '../InputMask';
import Input from '../Input';
import Select from '../Select';
import getValidationError from '../../utils/getValidationErrors';

import { useCountry } from '../../hooks/CountryContext';

import { Container, FormContent } from './styles';

interface FormData {
  name: string;
  local: string;
  date: string;
}

const CreateCardData: React.FC = () => {
  const { countries, handleAddCountry } = useCountry();
  const formRef = useRef<FormHandles>(null);

  const selectOptions = useMemo(
    () =>
      countries.map(item => ({
        value: item.translations.br,
        label: item.translations.br,
      })),
    [countries],
  );

  const handleSubmit = useCallback(
    async (data: FormData, { reset }) => {
      try {
        formRef.current?.setErrors({});

        const schema = yup.object().shape({
          name: yup.string().required('campo obrigatório'),
          local: yup.string().required('campo obrigatório'),
          date: yup.string().required('campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const selectedCountry = countries.find(
          item => item.translations.br === data.name,
        );

        const countryData = {
          id: uuid(),
          flag: selectedCountry?.flag,
          ...data,
        };

        handleAddCountry(countryData);

        reset();
        const select = formRef.current?.getFieldRef('name');
        select.select.clearValue();
      } catch (err) {
        const error = getValidationError(err);

        formRef.current?.setErrors(error);
      }
    },
    [countries, handleAddCountry],
  );

  return (
    <Container>
      <FormContent onSubmit={handleSubmit} ref={formRef}>
        <Select
          name="name"
          placeholder="Selecione..."
          options={selectOptions}
          label="País"
          data-testid="name"
        />
        <Input
          name="local"
          label="Local"
          placeholder="Digite o local que deseja conhecer"
          data-testid="local"
        />
        <InputMask
          name="date"
          mask="99/9999"
          label="Meta"
          placeholder="mês/ano"
          data-testid="date"
        />
        <button type="submit">Adicionar</button>
      </FormContent>
    </Container>
  );
};

export default CreateCardData;
