import { Alert, CircularProgress, Grid, Snackbar, ThemeProvider } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import countriesApi from "../../services/countriesApi";
import { CountriesResponse, Country } from "../../types";
import MultipleSelect from "../MultipleSelect";

import { Container, SearchContainer, InputRow, Col, LocalInput, MetaInput, AddButton, ListingContainer, Form, Center } from "./styles";
import Card from "../Card";
import api from "../../services/api";
import InputMask from 'react-input-mask';
import { componentsTheme } from "../../theme/materialStyles";

const Listing: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedLocal, setSelectedLocal] = useState<string>('')
  const [selectedMeta, setSelectedMeta] = useState<string>('')
  const [apiError, setApiError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<CountriesResponse[]>([]);
  const [feedback, setFeedback] = useState<boolean>(false);

  const getCountriesOptions = useCallback(() => {
    countriesApi.get('/all').then((response)=> {
      setCountries(response.data);
    }).catch((er)=>{
      setApiError(true);
      console.log('er', er);
    }); 
  },[])

  const getCountries = useCallback(() => {
    api.get('/countries').then((response)=> {
      setData(response.data);
    }).catch((er)=>{
      setApiError(true);
      console.log('er', er);
    }); 
  },[])

  useEffect(() => {
    getCountriesOptions();
    getCountries()
  },[getCountriesOptions, getCountries])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if(!selectedCountry || !selectedLocal || !selectedMeta || selectedMeta.replace(/[^A-Z0-9]/gi, '').length < 6){
      setError(true);
      setLoading(false);
      return ;
    }

    const newData = {
      name: selectedCountry,
      flag: countries.find((item)=> item.translations.por.common === selectedCountry)?.flags.svg,
      local: selectedLocal,
      meta: selectedMeta
    }
    
    api.post('/countries', {...newData}).then((response) => {
      setData([...data, response.data]);
      setLoading(false);
      setSelectedCountry('');
      setSelectedLocal('');
      setSelectedMeta('');
    }).catch((error)=> {
      setLoading(false);
      console.log(error);
      setApiError(true);
    })
  }

  const handleUpdate = () => {
    setFeedback(true);
    getCountries();
  }

  return (
    <Container>
      <SearchContainer>
        <Form onSubmit={handleSubmit}>
          <InputRow>
            <ThemeProvider theme={componentsTheme}>
              <Grid justifyContent="center" container spacing={4}>
                <Grid item xs={10} sm={3} md={3} lg={3}>
                  <MultipleSelect data-testid="select-input" value={selectedCountry} onSelect={(e) => {setSelectedCountry(e)}} countries={countries ?? []}/>
                </Grid>
                <Grid item xs={10} sm={4} md={4} lg={4}>
                  <Col>
                    <span>Local</span>
                    <LocalInput data-testid="local-input" value={selectedLocal} onChange={(e) => setSelectedLocal(e.target.value)} placeholder="Digite o local que deseja conhecer" />
                  </Col>
                </Grid>
                <Grid item xs={10} sm={2} md={2} lg={2}>
                  <Col>
                    <span>Meta</span>
                    <InputMask data-testid="meta-input" mask="99/9999" value={selectedMeta} onChange={(e) => setSelectedMeta(e.target.value)}>
                      <MetaInput placeholder="mês/ano" />
                    </InputMask>
                  </Col>
                </Grid>
                <Grid item xs={8} sm={2} md={2} lg={2}>
                  <AddButton type="submit" className="teste">
                    {loading ? <CircularProgress color="inherit" /> : 'Adicionar'}
                  </AddButton>
                </Grid>
              </Grid>
            </ThemeProvider>
          </InputRow>
        </Form>
      </SearchContainer>
      
      <Center>
        <ListingContainer>
          {data.length > 0 && data.map((item, index) => (
            <Card key={item.id} onUpdate={() => {handleUpdate()}} countryId={item.id}></Card>
          ))}
        </ListingContainer>
      </Center>

      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error" variant="filled" sx={{ width: '100%' }}>
          É necessário preencher todos os campos.
        </Alert>
      </Snackbar>

      <Snackbar open={apiError} autoHideDuration={6000} onClose={() => setApiError(false)}>
        <Alert onClose={() => setApiError(false)} variant="filled" severity="error" sx={{ width: '100%' }}>
          Ocorreu um erro
        </Alert>
      </Snackbar>

      <Snackbar open={feedback} autoHideDuration={6000} onClose={() => setFeedback(false)}>
        <Alert onClose={() => setFeedback(false)} variant="filled" severity="success" sx={{ width: '100%' }}>
          Alterações salvas com sucesso.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Listing;
