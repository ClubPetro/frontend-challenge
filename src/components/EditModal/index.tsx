
import { Alert, Dialog, Snackbar, TextField, Tooltip } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import InputMask from 'react-input-mask';
import { CountriesResponse } from '../../types';

import { Container, Content, InputContainer, Line, SaveButton, TitleContainer, Option, Form } from './styles';
import { Close } from '@mui/icons-material';

interface ModalProps{
  onClose: () => void;
  onUpdate: () => void;
  open: boolean;
  countryId: number;
}

const EditModal: React.FC<ModalProps> = ({open=false, onClose, countryId, onUpdate}) => {
  const [country, setCountry] = useState<CountriesResponse>({} as CountriesResponse);
  const [feedback, setFeedback] = useState<boolean>(false);
  
  const getCountry = useCallback(() => {
    api.get(`/countries/${countryId}`).then((response)=>{
      console.log('name', response)
      setCountry(response.data)
    }).catch((err) => console.log(err));
  },[countryId])

  const handleEdit = ((event:React.FormEvent) => {
    event.preventDefault();
    console.log('obj', country);
    api.put(`/countries/${countryId}`, {...country}).then((response) =>{
      console.log('edited', response);
      onUpdate();
      setFeedback(true);
      onClose();
    }).catch((err) => console.log(err));
  })

  useEffect(() => {
    getCountry();
  },[getCountry])
  
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
            <SaveButton type="submit">Salvar</SaveButton>
          </Form>

          <Option>
            <Tooltip title="Close Modal">
              <Close cursor="pointer" onClick={() => onClose()} style={{color:"#868686"}}/>
            </Tooltip>
          </Option>
        </Content>
        
      </Dialog>
      <Snackbar open={feedback} autoHideDuration={6000} onClose={() => setFeedback(false)}>
        <Alert onClose={() => setFeedback(false)} variant="filled" severity="success" sx={{ width: '100%' }}>
          Alterações salvas.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default EditModal;
