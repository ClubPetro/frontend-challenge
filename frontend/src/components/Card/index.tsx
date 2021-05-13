import { useState, useCallback } from 'react';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';

import { Container, CardHeader, CardBody } from './styles';
import Modal from '../Modal';

interface CardProps {
  data: {
    id: string;
    flag: string;
    name: string;
    local: string;
    date: string;
  };
  onDelete: () => Promise<void>;
}

const Card: React.FC<CardProps> = ({ data, onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Container>
      <CardHeader>
        <div>
          <img src={data.flag} alt={data.name} />
          <div>
            <button type="button" onClick={handleOpenModal}>
              <img src={editIcon} alt="editar" />
            </button>

            <button
              type="button"
              data-testeid={`delete-${data.id}`}
              onClick={onDelete}
            >
              <img src={deleteIcon} alt="excluir" />
            </button>
          </div>
        </div>

        <strong>{data.name}</strong>
      </CardHeader>
      <CardBody>
        <p>Local: {data.local}</p>
        <p>Meta: {data.date}</p>
      </CardBody>
      <Modal id={data.id} open={open} handleClose={handleCloseModal} />
    </Container>
  );
};

export default Card;
