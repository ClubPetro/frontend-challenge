import { useCallback } from 'react';
import { Formik } from 'formik';
import { usePlaces } from '../../../../hooks/usePlaces';

import api from '../../../../services/api';
import schema from './schema';

import Input from '../../../Input';

import * as S from './styles';

interface FormData {
  editlocal: string;
  editgoal: string;
}

interface EditPlaceProps {
  id: number;
  local: string;
  goal: string;
  hide(): void;
}

export default function EditPlace(props: EditPlaceProps) {
  const { places, setPlaces } = usePlaces();

  const { id, local, goal, hide } = props;

  const initialValues: FormData = {
    editlocal: local,
    editgoal: goal,
  };

  const handleSubmit = useCallback(
    async (data: FormData) => {
      const response = await api.patch(`places/${id}`, {
        local: data.editlocal,
        goal: data.editgoal,
      });

      const updatedPlace = places.findIndex(place => place.id === id);

      const newPlaces = places;
      newPlaces.splice(updatedPlace, 1, response.data);

      setPlaces([...newPlaces]);
      hide();
    },
    [hide, id, places, setPlaces],
  );

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      {() => (
        <S.Container>
          <Input
            name="editlocal"
            id="editlocal"
            label="Local"
            placeholder="Digite o local que deseja conhecer"
          />
          <Input
            name="editgoal"
            id="editgoal"
            label="Meta"
            placeholder="mês/ano"
          />
          <S.Buttons>
            <button type="button" onClick={hide}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </S.Buttons>
        </S.Container>
      )}
    </Formik>
  );
}