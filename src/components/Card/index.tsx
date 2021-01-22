import React from 'react';
import { Container } from './styles';

interface ICountry {
  name: string;
  iconReference: string;
  local: string;
  meta: string;
}

const Card: React.FC<ICountry> = ({ name, iconReference, local, meta }) => {
  const country = {
    name: name || '',
    iconReference: iconReference || '',
    local: local || '',
    meta: meta || '',
  };

  return (
    <Container>
      <div>
        <div>
          <img src={country.iconReference} alt="" />
          <h1>{country.name}</h1>
        </div>
        <div>
          <button type="button">e</button>
          <button type="button">d</button>
        </div>
      </div>
      <div>
        <p>{country.local}</p>
        <p>{country.meta}</p>
      </div>
    </Container>
  );
};

export default Card;
