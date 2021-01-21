import React from 'react';
import InputMask from "react-input-mask";
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { 
  Button, Dialog, FormControl, NativeSelect,
  InputBase, FormHelperText, OutlinedInput
} from '@material-ui/core';

import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

//---------------------- Interfaces ------------------------//
import { CountryInterface } from 'pages/Home'
import { FormDataUpdInterface } from 'pages/Home'

interface PropsInterface {
  onSubmitUpdate(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  editFormChange(event: React.ChangeEvent<HTMLInputElement>): void;
  editFormChangeFlag(event: { target: HTMLInputElement  } | React.ChangeEvent<HTMLSelectElement>): void;
  sEditForm?: FormDataUpdInterface;
  countries?: Array<CountryInterface>
  handleClickOpen(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  handleClose(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  open: boolean;
  sEditErrorCountry: boolean;
  sEditErrorLocal: boolean;
  sEditErrorMeta: boolean;
}

//------------------- Custom Material Ui -------------------//
const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(0),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      color: '#868686',
      padding: '12px 10px 13px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
    }
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '20px',
      '& .MuiDialog-paper': {
        margin: '0px'
      }
    },
    formControl: {
      width: '100%',
      marginTop: theme.spacing(2)
    },
    myButton: {
      marginTop: theme.spacing(2),
      padding: '11.5px',
      textTransform: 'initial'
    },
    error: {
      border: '1px solid #ff1744',
      borderRadius: '4px'
    }
  })
);

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);
//------------------------- End ----------------------------//

const FormEdit: React.FC<PropsInterface> = (props) => {
  const classes = useStyles();

  const {
    sEditForm, editFormChangeFlag, editFormChange, handleClose, open,
    onSubmitUpdate, countries, sEditErrorCountry, sEditErrorLocal, sEditErrorMeta
  } = props;

  return (
    <Dialog maxWidth="xs" onClose={handleClose} className={classes.root} open={open}>
      <DialogContent dividers>
        <form  id="onSubmitUpdate">
          <FormControl className={classes.formControl}>
            <label style={{color: sEditErrorCountry ? '#ff1744' :''}} htmlFor="country">Países</label>
            <NativeSelect 
              className={(sEditErrorCountry ? classes.error : '')} 
              inputProps={{ 'name': 'country'}} 
              onChange={editFormChangeFlag} 
              value={ sEditForm?.country }
              input={<BootstrapInput />}
            >
              <option  value={sEditForm?.country }>{ sEditForm?.country} </option>
              {countries?.map((c, idx) => {
                return(
                  <option  
                    key={idx} 
                    value={c.country} 
                    data-flag={c.flag}
                  >
                    {c.country}
                  </option>
                )
              })}
            </NativeSelect>
            {sEditErrorCountry ? (<FormHelperText error>*Campo obrigatório</FormHelperText>) : null}
          </FormControl>
          
          <FormControl className={classes.formControl}>
            <label style={{color: sEditErrorLocal ? '#ff1744' :''}} htmlFor="local">Local</label>
            <OutlinedInput value={sEditForm?.local} onChange={editFormChange} 
              error={sEditErrorLocal ?? true}
              inputProps={{
                'name': 'local',
                'autocomplete': 'off',
                placeholder: 'Digite o local que deseja conhecer',
                style: {
                  padding: '14px',
                },
              }}
              labelWidth={0} 
            />
            {
              sEditErrorLocal ? 
                (<FormHelperText error style={{margin: '3px 0 0'}}>
                  *Campo obrigatório
                </FormHelperText>) 
              : null}
          </FormControl>
          
          <FormControl className={classes.formControl}>
            <label style={{color: sEditErrorMeta ? '#ff1744' :''}} htmlFor="meta">Meta</label>
            <InputMask value={sEditForm?.meta} onChange={editFormChange} mask="99/9999">  
              {() => <OutlinedInput
                value={sEditForm?.meta} 
                onChange={editFormChange} 
                error={sEditErrorMeta}
                inputProps={{
                  'name': 'meta',
                  'autocomplete': 'off',
                  placeholder: 'mês/ano',
                  style: {
                    padding: '14px',
                  }
                }}
              />}
            </InputMask>
            {
              sEditErrorMeta ? 
                (<FormHelperText error style={{margin: '3px 0 0'}}>
                  *Campo obrigatório <br/>*Data (01 á 12) e Ano (2021 á 2099)
                </FormHelperText>) 
              : null
            }
          </FormControl>
        </form>
      </DialogContent>

      <DialogActions>
        <Button 
          size="small" 
          onClick={handleClose} 
          variant="contained" 
          style={{background: '#f44336', color: '#fff'}}>
          Cancelar
        </Button>
        <Button 
          size="small" 
          onClick={onSubmitUpdate} 
          variant="contained" 
          color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>       
  );
}

export default FormEdit;
