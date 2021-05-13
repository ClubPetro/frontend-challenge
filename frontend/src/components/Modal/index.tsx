import { useRef, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';

import getValidationError from '../../utils/getValidationErrors';
import { useCountry } from '../../hooks/CountryContext';

import Input from '../Input';
import InputMask from '../InputMask';

import { Content } from './styles';

interface FormData {
  local: string;
  date: string;
}

interface ModalProps {
  id: string;
  open: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ id, handleClose, open }) => {
  const { handleUpdateCountry } = useCountry();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = yup.object().shape({
          local: yup.string().required('campo obrigatório'),
          date: yup.string().required('campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        handleUpdateCountry(id, data);

        handleClose();
      } catch (err) {
        const error = getValidationError(err);

        formRef.current?.setErrors(error);
      }
    },
    [handleUpdateCountry, handleClose, id],
  );

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Content onSubmit={handleSubmit} ref={formRef}>
          <Input
            data-testeid="edit-place-field"
            name="local"
            placeholder="Digite o local que deseja conhecer"
            label="Local"
          />
          <InputMask
            data-testeid="edit-goal-field"
            name="date"
            placeholder="mês/ano"
            mask="99/9999"
            label="Meta"
          />
          <button type="submit">editar</button>
        </Content>
      </Dialog>
    </>
  );
};

export default Modal;
