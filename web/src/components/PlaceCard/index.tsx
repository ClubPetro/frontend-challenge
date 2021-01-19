import React from 'react';
import { MdClose } from 'react-icons/md';
import EditPlaceModal from '../EditPlaceModal';

import { Place } from '../PlaceCardList';

import { Container, CardHeader, CardContent } from './styles';

interface PlaceCardProps {
  data: Place;
}


const PlaceCard: React.FC<PlaceCardProps> = ({ data }) => {
  return (
    <Container>
      <CardHeader>
        <div className="country-flag">
          <img src={data.country.flag} alt={`${data.country.name}`}/>
        </div>
        <div className="buttons">
          <EditPlaceModal >
            { (close: () => void)  => (
              <button type="button" onClick={close}>Fechar</button>
            )}
          </EditPlaceModal>
          <button type="button">
            <MdClose size={20} color="#868686"/>
          </button>
        </div>
      </CardHeader>
        <div className="coutry-name">
          <strong>{data.country.name}</strong>
        </div>
      <CardContent>
        <p>Local: Balneário Camboriú</p>
        <p>Meta: 04/2022</p>
      </CardContent>
    </Container>
  )
}

export default PlaceCard;