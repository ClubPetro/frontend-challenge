import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

import { Container, Image } from './styles';
import { IGoal } from '../../Interfaces/index';
import dbApi from '../../services/dbApi';

const Card: React.FC<IGoal> = ({ id, country, spot, date }) => {
  useEffect(() => {
    console.log(country.flag);
  }, []);

  const handleDelete = async () => {
    if (id) await dbApi.deleteGoal(id);
    window.location.reload();
  };

  return (
    <Container>
      <div className="card-padding">
        <Image image={country.flag} />
        <h1>{country.translations.br}</h1>
      </div>
    </Container>
    // <Container>
    //   <div>
    //     <div>
    //       <img src={country.flag} alt="" />
    //       <h1>{country.translations.br}</h1>
    //     </div>
    //     <div>
    //       <button type="button">e</button>
    //       <button type="button" onClick={handleDelete}>
    //         <SvgIcon component={MdClose} />
    //         {/* <img src={MdClose} alt=""/> */}
    //       </button>
    //     </div>
    //   </div>
    //   <div>
    //     <p>{spot}</p>
    //     <p>{date}</p>
    //   </div>
    // </Container>
  );
};

export default Card;
