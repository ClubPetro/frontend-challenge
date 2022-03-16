
import { Alert, CircularProgress, Dialog, Snackbar, TextField, Tooltip } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import InputMask from 'react-input-mask';
import { CountriesResponse, EditModalProps } from '../../types';

import { Container, Content, InputContainer, Line, SaveButton, TitleContainer, Option, Form } from './styles';
import { Close } from '@mui/icons-material';


const EditModal: React.FC<EditModalProps> = ({open=false, onClose, countryId, onUpdate}) => {
  const [country, setCountry] = useState<CountriesResponse>({} as CountriesResponse);
  const [feedback, setFeedback] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const getCountry = useCallback(() => {
    api.get(`/countries/${countryId}`).then((response)=>{
      setCountry(response.data)
    }).catch((err) => console.log(err));
  },[countryId])

  const handleEdit = ((event:React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if(!country.local || !country.meta){
      setApiError(true);
      setLoading(false);
      return;
    }
    api.put(`/countries/${countryId}`, {...country}).then((response) =>{
      onUpdate();
      setFeedback(true);
      setLoading(false);
      onClose();
    }).catch((err) => {
      setError(true);
      setLoading(false);
      console.log(err)
    });
  })

  useEffect(() => {
    getCountry();
  },[getCountry])

  const handleClose = () => {
    getCountry();
    onClose();
  }
  
  return (
    <Container>
      <Dialog onClose={onClose} open={open}>
        <Content>
          <TitleContainer>
            <img alt="flag" src={country.flag}/>
            <h1>{country.name?.toUpperCase()}</h1>
            <small>{country.local}, {country.meta}</small> 
          </TitleContainer>
          <Line/>
          <Form onSubmit={handleEdit} >
            <InputContainer>
              <span>Local</span>
              <TextField value={country.local} onChange={(e) => setCountry({...country, local: e.target.value})} variant='standard' size='small'/>
            </InputContainer>

            <InputContainer>
              <span>Meta</span>
              <InputMask mask="99/9999" value={country.meta} onChange={(e: any) => setCountry({...country, meta: e.target.value})}>
                <TextField placeholder="mês/ano" variant='standard' size='small'/>
              </InputMask>
              
            </InputContainer>
            <SaveButton type="submit">
              {loading ? <CircularProgress color="inherit" /> : 'Salvar'}
            </SaveButton>
          </Form>

          <Option>
            <Tooltip title="Close Modal">
              <Close cursor="pointer" onClick={() => handleClose()} style={{color:"#868686"}}/>
            </Tooltip>
          </Option>
        </Content>
      </Dialog>

      <Snackbar open={feedback} autoHideDuration={6000} onClose={() => setFeedback(false)}>
        <Alert onClose={() => setFeedback(false)} variant="filled" severity="success" sx={{ width: '100%' }}>
          Alterações salvas.
        </Alert>
      </Snackbar>

      <Snackbar open={apiError} autoHideDuration={6000} onClose={() => setApiError(false)}>
        <Alert onClose={() => setApiError(false)} severity="error" variant="filled" sx={{ width: '100%' }}>
          É necessário preencher todos os campos.
        </Alert>
      </Snackbar>
      
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} variant="filled" severity="error" sx={{ width: '100%' }}>
          Ocorreu um erro
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default EditModal;
