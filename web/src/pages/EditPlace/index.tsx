import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import InputMask from 'react-input-mask';

import Input from '../../components/Input';

import { Container } from './styles';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import { Place } from '../PlaceCardList';


interface FormObject {
  place: string;
  goal: string;
}

interface EditPlaceParams {
  placeId: string;
}

const EditPlace: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {placeId} = useParams<EditPlaceParams>();
  const [placeData, setPlaceData] = useState<Place>({} as Place)
  const history = useHistory();

  useEffect(() => {
    const loadPlaceInfo = async() => {
      const response = await api.get(`/${placeId}`);
      console.log(response.data);
      setPlaceData(response.data);

      formRef.current?.setFieldValue('place', placeData.place);
      formRef.current?.setFieldValue('goal', placeData.goal);
    }
    loadPlaceInfo();
  }, [placeData.goal, placeData.place, placeId])


  const handleSubmit = useCallback(
    async(data: FormObject) => {
      await api.patch(`/${placeId}`, data, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      formRef.current?.reset();
      history.replace("/");
      
  },[history, placeId]);

  return (
    <Container>
      <h1>Digite as novas informações:</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <div id="country">
          <img 
          src={placeData?.country?.flag} 
          alt={placeData?.country?.name}
          />
          <strong>{placeData?.country?.name}</strong>
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