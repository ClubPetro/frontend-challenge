import React from 'react';
import { MdClose } from 'react-icons/md';
import EditPlaceModal from '../EditPlaceModal';

import { Place } from '../PlaceCardList';

import Input from '../Input';

import { Container, CardHeader, CardContent, ModalFormContainer,Select, } from './styles';
import { Form } from '@unform/web';

interface PlaceCardProps {
  data: Place;
}


const PlaceCard: React.FC<PlaceCardProps> = ({ data }) => {

  const handleCloseButtonClick = (close: () => void)  => {
    return (
      <ModalFormContainer>
      <Form onSubmit={() => {}}>
        <Select />
        <Input name="place"/>
        <Input name="meta"/>
        <button type="button" onClick={close}>
          Fechar
        </button>
      </Form>
    </ModalFormContainer>
    );
  };


  return (
    <Container>
      <CardHeader>
        <div className="country-flag">
          <img src={data.country?.flag} alt={`${data.country?.name}`}/>
        </div>
        <div className="buttons">
          <EditPlaceModal >
            { handleCloseButtonClick }
          </EditPlaceModal>
          <button type="button">
            <MdClose size={20} color="#868686"/>
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