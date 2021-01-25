import React, { useState } from 'react';
import { MdClose, MdModeEdit } from 'react-icons/md';
import { Icon } from '@material-ui/core';
import { Container, Image } from './styles';
import { IGoal } from '../../Interfaces/index';
import dbApi from '../../services/dbApi';
import FromDialog from '../CardUpdateModal';

const Card: React.FC<IGoal> = ({ id, country, spot, date }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [goal, setGoal] = useState<IGoal>({
    country: {
      translations: {
        br: country.translations.br,
      },
      flag: country.flag,
    },
    spot,
    date,
    id,
  });
  const handleDelete = async () => {
    if (id) await dbApi.deleteGoal(id);
    window.location.reload();
  };

  return (
    <Container>
      <FromDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        goal={goal}
      />
      <div>
        <div className="header">
          <div className="flag-area">
            <Image image={country.flag} />
            <h1>{country.translations.br}</h1>
          </div>
          <div className="delete-edit-area">
            <button type="button">
              <Icon
                component={MdModeEdit}
                onClick={() => setModalOpen(true)}
                color="action"
              />
            </button>
            <button type="button">
              <Icon component={MdClose} onClick={handleDelete} color="action" />
            </button>
          </div>
        </div>
        <div className="separator" />
        <div className="info-area">
          <p>{`Local: ${spot}`}</p>
          <p>{`Meta: ${date}`}</p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
