import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import InputMask from 'react-input-mask';

import Input from '../../components/Input';

import { Container } from './styles';
import api from '../../services/api';
import { useHistory, useLocation, useParams } from 'react-router-dom';


interface FormObject {
  place: string;
  goal: string;
}

interface EditPlaceParams {
  placeId: string;
}


const EditPlace: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { placeId } = useParams<EditPlaceParams>();
  const history = useHistory();

  console.log(placeId);



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