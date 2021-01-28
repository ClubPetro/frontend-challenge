import { useCallback } from 'react';
import { usePlaces } from '../../hooks/usePlaces';

import * as S from './styles';

interface ConfirmationProps {
  id: number;
  local: string;
  country: string;
  hide(): void;
}

export default function Confirmation(props: ConfirmationProps) {
  const { id, local, country, hide } = props;

  const { handleRemovePlace } = usePlaces();

  const handleRemove = useCallback(() => {
    handleRemovePlace(id);
    hide();
  }, [id, handleRemovePlace, hide]);

  return (
    <S.Container>
      <p>
        Você tem certeza que deseja excluir{' '}
        <b>
          {local} - {country}
        </b>{' '}
        como lugar que quer conhecer?
      </p>
      <div>
        <button type="button" onClick={hide}>
          Cancelar
        </button>
        <button type="button" onClick={handleRemove}>
          Excluir
        </button>
      </div>
    </S.Container>
  );
}
