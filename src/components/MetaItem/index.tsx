/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';

import Input from '../Input';
import InputDate from '../InputDate';

import Edit from '../../assets/edit.svg';
import Delete from '../../assets/delete.svg';

import {
  Card,
  ContainerCard,
  FlagCard,
  EditCard,
  Button,
  InfoCard,
  LocalCard,
} from './styles';

interface ModalProps {
  id: string;
  flag: string;
  country: string;
  local: string;
  date: string;
  toDelete: (id: string) => void;
  toEdit: (data: any, i: any) => void;
}

const MetaItem: React.FC<ModalProps> = ({
  id,
  flag,
  country,
  local,
  date,
  toDelete,
  toEdit,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#353333',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Card>
      <ContainerCard>
        <FlagCard>
          <img src={flag} alt="Bandeira" />

          <p>{country}</p>
        </FlagCard>
        <EditCard>
          <button type="button" onClick={openModal}>
            <img src={Edit} alt="Edição" />
          </button>
          <Modal isOpen={modalIsOpen} style={customStyles}>
            <Form onSubmit={data => toEdit(data, id)}>
              <Input
                name="local"
                placeholder="Digite o local que deseja conhecer"
                label="Local:"
              />
              <InputDate
                name="date"
                placeholder="mês/ano"
                label="Meta:"
                mask="99/9999"
              />

              <Button type="submit">
                <span>Editar</span>
              </Button>

              <Button type="button" onClick={closeModal}>
                <span>Fechar</span>
              </Button>
            </Form>
          </Modal>

          <button type="button" onClick={() => toDelete(id)}>
            <img src={Delete} alt="" />
          </button>
        </EditCard>
      </ContainerCard>

      <LocalCard>
        <hr />
        <InfoCard>
          <p>{`Local: ${local}`}</p>
          <p>
            {`Meta:
            ${date}`}
          </p>
        </InfoCard>
      </LocalCard>
    </Card>
  );
};

export default MetaItem;
