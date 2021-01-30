import { useCallback } from 'react';
import { usePlaces } from '../../../../hooks/usePlaces';

import Input from '../../../Input';

import * as S from './styles';

interface EditPlaceProps {
  id: number;
  local: string;
  meta: string;
  hide(): void;
}

export default function EditPlace(props: EditPlaceProps) {
  const { id, local, meta, hide } = props;

  const { handleEditPlace } = usePlaces();

  const handleSubmit = useCallback(() => {
    handleEditPlace(id);
    hide();
  }, [handleEditPlace, id, hide]);

  return (
    <S.Container onSubmit={handleSubmit}>
      <Input
        name="editlocal"
        id="editlocal"
        label="Local"
        placeholder="Digite o local que deseja conhecer"
        value={local}
      />
      <Input
        name="editgoal"
        id="editgoal"
        label="Meta"
        placeholder="mês/ano"
        value={meta}
      />
      <S.Buttons>
        <button type="button" onClick={hide}>
          Cancelar
        </button>
        <button type="submit">Salvar</button>
      </S.Buttons>
    </S.Container>
  );
}
