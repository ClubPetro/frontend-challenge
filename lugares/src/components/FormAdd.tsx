import React from 'react';
import InputMask from "react-input-mask";
import clsx from 'clsx';
import { makeStyles, Theme, withStyles, createStyles } from '@material-ui/core/styles';
import {
  Container, Grid, TextField, Box,Button, FormControl, 
  FormHelperText, NativeSelect, InputBase 
} from '@material-ui/core';

//---------------------- Interfaces ------------------------//
import { CountryInterface } from 'pages/Home'
import { FormDataAddInterface } from 'pages/Home'

interface PropsInterface {
  onSubmitAdd(event: React.FormEvent<HTMLFormElement>): void;
  onChangeFormAdd(event: React.ChangeEvent<HTMLInputElement>): void;
  onChangeFormDataFlag(event: {target: HTMLInputElement} | React.ChangeEvent<HTMLSelectElement>): void;
  formDataAdd?: FormDataAddInterface;
  countryes?:  Array<CountryInterface>
  onErrorCountry: boolean;
  onErrorLocal: boolean;
  onErrorMeta: boolean;
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
    sectionFormAdd: {
      background: '#4F9419',
      padding: '55px 0 60px',
    },
    root: {
      '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
      },
      '& .MuiFormHelperText-contained': {
        marginLleft: '0px',
        marginRight: '0px'
      }
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    formControl: {
      minWidth: 120,
    },
    outlinedInput: {
      padding: '0',
      borderColor: 'none',
      border: '0px',
      borderRadius: '7px',
      backgroundColor: '#fff',
      color: '#868686',
      '& :before, & :after, & :hover': {
        border: 'none',
        borderBottom: 'none !important',
      },
    },
    selectEmpty: {
      background: '#fff',
      margin: theme.spacing(0),
      padding:0,
      borderColor: 'none',
      border: '0px',
      borderRadius: '7px',
      color: '#868686',
    },
    textField: {
      width: '100%',
      padding: 0,
      color: '#fff',
    },
    boxGroupInputs: {
      display: "flex",
      flexWrap: 'wrap'
    },
    myButton: {
      width: '100%',
      marginTop: '19px',
      padding: '11.5px',
      textTransform: 'initial'
    },
    error: {
      border: '1px solid #fff817',
      borderRadius: '4px'
    },
    errorColor: {
      color: '#fff817 !important'
    },
    respBoxInputs: {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      },
    },
  }),
);

const FormAdd: React.FC<PropsInterface> = (props) => {
  const classes = useStyles();
  const {
    onSubmitAdd, onChangeFormAdd, onChangeFormDataFlag, formDataAdd,
    countryes, onErrorCountry, onErrorLocal, onErrorMeta
  } = props;

  return (
    <section className={classes.sectionFormAdd}>
      <Container maxWidth="lg">
        <Grid item>
          <form onSubmit={onSubmitAdd} className={classes.root}>
            <Box width="100%" className={classes.boxGroupInputs}>
      
              <Box width="26%" bgcolor="" p={1} my={0.5} className={clsx(classes.respBoxInputs)}>
                <FormControl className={clsx(classes.formControl, classes.textField)}>
                  <label className={onErrorCountry ? classes.errorColor :''} htmlFor="country">Paises</label>
                  <NativeSelect
                    className={clsx(classes.selectEmpty)}
                    onChange={onChangeFormDataFlag}
                    name="country"
                    inputProps={{ 'name': 'country'}}
                    input={<BootstrapInput />}
                  >
                    <option value="">Selecione...</option>
                    {countryes?.map((c, idx) => (
                      <option key={idx} value={c.country} data-flag={c.flag}>{c.country}</option>
                    ))}
                  </NativeSelect>
                  {
                    onErrorCountry ? 
                      (<FormHelperText className={classes.errorColor}>
                        *Campo obrigatório</FormHelperText>) 
                    : null
                  }
                </FormControl>
              </Box>
              
              <Box width="37%" bgcolor="" p={1} my={0.5} className={classes.respBoxInputs}>
                <FormControl className={clsx(classes.textField)} variant="outlined">
                  <label className={onErrorLocal ? classes.errorColor :''} htmlFor="Local">Local</label>
                  <TextField 
                    className={classes.outlinedInput} 
                    value={formDataAdd?.local } 
                    onChange={onChangeFormAdd} 
                    error={onErrorLocal}
                    inputProps={{
                      'name': 'local',
                      placeholder: 'Digite o local que deseja conhecer',
                      style: {
                        padding: '14px',
                      },
                      'autoComplete': 'off'
                    }}
                  />
                  {
                    onErrorLocal ? 
                      (<FormHelperText className={classes.errorColor}>
                        *Campo obrigatório
                      </FormHelperText>) 
                    : null
                  }
                </FormControl>
              </Box>
              
              <Box width="21%" bgcolor="" p={1} my={0.5} className={classes.respBoxInputs}>
                <FormControl className={clsx(classes.textField)} variant="outlined">
                  <label className={onErrorMeta ? classes.errorColor :''}  htmlFor="meta">Meta</label>
                  <InputMask value={formDataAdd?.meta} onChange={onChangeFormAdd} mask="99/9999">  
                    {() => <TextField
                      className={clsx(classes.outlinedInput)} 
                      value={formDataAdd?.meta} 
                      onChange={onChangeFormAdd} 
                      error={onErrorMeta}
                      inputProps={{
                        'name': 'meta',
                        'autoComplete': 'off',
                        placeholder: 'mês/ano',
                        style: {
                          padding: '14px',
                        }
                      }}
                    />}
                  </InputMask>
                  {
                    onErrorMeta ? 
                      (<FormHelperText className={classes.errorColor}>
                        *Campo obrigatório <br/>*Data (01 á 12) e Ano (2021 á 2099)
                      </FormHelperText>)
                    : null}
                </FormControl>
              </Box>
              
              <Box width="16%" bgcolor="" p={1} my={0.5} className={classes.respBoxInputs}>
                <Button variant="contained" color="primary" type="submit" className={classes.myButton}>
                  Adicionar
                </Button>
              </Box>
            </Box>
          </form>
        </Grid>
      </Container>
    </section>
  );
}

export default FormAdd;

