import { useState } from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';
import { Place as IPlace } from '../../../hooks/usePlaces';

import Modal from '../../Modal';
import Confirmation from '../../Confirmation';

import * as S from './styles';

interface PlaceProps {
  place: IPlace;
}

export default function Place(props: PlaceProps) {
  const { place } = props;

  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <img src={place.flag} alt={place.country} />
          <strong>{place.country}</strong>
        </S.Header>
        <S.Infos>
          <p>Local: {place.local}</p>
          <p>Meta: {place.meta}</p>
        </S.Infos>
        <S.Buttons>
          <button type="button">
            <FiEdit2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => setModalIsShown(state => !state)}
          >
            <FiX size={20} />
          </button>
        </S.Buttons>
      </S.Wrapper>
      <Modal
        title="Excluir local"
        isShown={modalIsShown}
        hide={() => setModalIsShown(state => !state)}
      >
        <Confirmation
          id={place.id}
          local={place.local}
          country={place.country}
          hide={() => setModalIsShown(state => !state)}
        />
      </Modal>
    </>
  );
}
