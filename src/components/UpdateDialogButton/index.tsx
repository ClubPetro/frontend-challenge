import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as Yup from 'yup';

import { FormEdit } from './styles';
import Input from '../Input';
import InputMask from '../InputMask';
import api from '../../services/api';

interface Country {
  id: string;
  flag: string;
  country: string;
  local: string;
  date: string;
}

interface UpdateDialogButtonProps {
  itemId: string;
  countries: Country[];
  handleUpdateCountry(): void;
}

const UpdateDialogButton: React.FC<UpdateDialogButtonProps> = ({
  children,
  itemId,
  countries,
  handleUpdateCountry,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          local: Yup.string().required('Campo obrigatório.'),
          date: Yup.string().required('Campo obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = countries.find(c => c.id === itemId);

        const updatedCountry = { ...response, ...data };

        await api.put(`countries/${itemId}`, updatedCountry);
        handleUpdateCountry();
        handleClose();
      } catch (err) {
        console.log(err);
      }
    },
    [countries, handleUpdateCountry, itemId],
  );

  return (
    <div>
      <button type="button" color="primary" onClick={handleClickOpen}>
        {children}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">alterar informações</DialogTitle>
        <DialogContent>
          <FormEdit onSubmit={handleSubmit}>
            <Input
              name="local"
              placeholder={
                countries.find(country => country.id === itemId)?.local
              }
            />
            <InputMask
              name="date"
              mask="99/9999"
              placeholder={
                countries.find(country => country.id === itemId)?.date
              }
            />

            <DialogActions>
              <Button type="submit" color="primary">
                Salvar
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
            </DialogActions>
          </FormEdit>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateDialogButton;
