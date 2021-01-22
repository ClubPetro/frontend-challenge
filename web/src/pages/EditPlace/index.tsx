import React, { useCallback, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import InputMask from 'react-input-mask';

import Input from '../../components/Input';

import { Container } from './styles';
import api from '../../services/api';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Place } from '../PlaceCardList';


interface FormObject {
  place: string;
  goal: string;
}

interface EditPlaceParams {
  placeId: string;
}

interface LocationStateParams {
  place_data: Place;
}


const EditPlace: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {placeId} = useParams<EditPlaceParams>();

  const { state } = useLocation<LocationStateParams>();

  const history = useHistory();

  console.log(placeId);


  const handleSubmit = useCallback(
    async(data: FormObject) => {
      await api.patch(`/${placeId}`, data, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      formRef.current?.reset();
      history.push("/");
      
  },[history, placeId]);

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <div id="country">
          <img 
          src={state?.place_data.country.flag} 
          alt={state?.place_data.country.name}
          />
          <strong>{state?.place_data.country.name}</strong>
        </div>
        <Input name="place" placeholder="Digite o novo local"/>
        <InputMask mask="99/9999">
          {() => <Input name="goal" placeholder="Nova meta"/>}
        </InputMask>

        <button type="submit">
          Salvar
        </button>
     </Form>
    </Container>
  );
}

export default EditPlace;