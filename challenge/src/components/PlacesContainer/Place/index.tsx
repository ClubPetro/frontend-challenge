import { FiEdit2, FiX } from 'react-icons/fi';
import { Place as IPlace } from '../../../hooks/usePlaces';

import * as S from './styles';

interface PlaceProps {
  place: IPlace;
}

export default function Place(props: PlaceProps) {
  const { place } = props;

  return (
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
        <button type="button">
          <FiX size={20} />
        </button>
      </S.Buttons>
    </S.Wrapper>
  );
}
