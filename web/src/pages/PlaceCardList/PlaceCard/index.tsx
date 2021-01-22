import React, { useCallback } from 'react';
import { MdClose, MdEdit } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

import { Place } from '../../PlaceCardList';

import { Container, CardHeader, CardContent} from './styles';

interface PlaceCardProps  {
  data: Place;
}


const PlaceCard: React.FC<PlaceCardProps> = ({ data }) => {
  const history = useHistory();

  const handleEditButtonClick = useCallback(() => {
    history.push({
      pathname: `/edit/${data.id}`,
      state: {
        place_data: data
      }
    });
  }, [data, history]);

  const handleCloseButtonClick = async () => {
    await api.delete(`/${data.id}`);
    history.push("/");
  };


  return (
    <Container>
      <CardHeader>
        <div className="country-flag">
          <img src={data.country.flag} alt={`${data.country.name}`}/>
        </div>
        <div className="buttons">
          <button type="button" onClick={handleEditButtonClick}>
            <MdEdit size={16} color="#868686" />
          </button>
    
          <button type="button">
            <MdClose 
            size={20} color="#868686" 
            onClick={handleCloseButtonClick}
            />
          </button>
        </div>
      </CardHeader>
      <div className="coutry-name">
        <strong>{data.country?.name}</strong>
      </div>
      <CardContent>
        <p>Local: {data.place}</p>
        <p>Meta: {data.goal}</p>
      </CardContent>
    </Container>
  )
}

export default PlaceCard;