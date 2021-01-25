import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputMask from 'react-input-mask';
import { IGoal } from '../../Interfaces';
import { Image } from './styles';
import dbApi from '../../services/dbApi';

interface IProps {
  open: boolean;
  onClose: Function;
  goal: IGoal;
}

const FormDialog: React.FC<IProps> = ({ open, onClose, goal }) => {
  const [goalUpdated, setGoalUpdated] = useState<IGoal>(goal);
  const handleUpdate = async () => {
    if (goal.id) await dbApi.updateGoal(goal.id, goalUpdated);
    window.location.reload();
  };
  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    setGoalUpdated({
      ...goalUpdated,
      [name]: value,
    });
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => onClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Editar meta</DialogTitle>
        <DialogContent>
          <Image image={goal.country.flag} />
          <TextField
            margin="dense"
            name="spot"
            label="Local"
            fullWidth
            value={goalUpdated?.spot}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="date"
            label="Data"
            fullWidth
            value={goalUpdated?.date}
            onChange={handleChange}
          >
            <InputMask mask="99/9999" />
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
