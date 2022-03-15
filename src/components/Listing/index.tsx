import { Alert, Grid, Input, Snackbar } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import countriesApi from "../../services/countriesApi";
import { CountriesResponse, Country } from "../../types";
import MultipleSelect from "../MultipleSelect";

import { Container, SearchContainer, InputRow, Col, LocalInput, MetaInput, AddButton, ListingContainer, Form } from "./styles";
import Card from "../Card";
import api from "../../services/api";
import InputMask from 'react-input-mask';

const Listing: React.FC = () => {

  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedLocal, setSelectedLocal] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>('')
  
  const [error, setError] = useState<boolean>(false);

  const [data, setData] = useState<CountriesResponse[]>([]);

  const getCountriesOptions = useCallback(() => {
    countriesApi.get('/all').then((response)=> {
      setCountries(response.data);
    }).catch((er)=>{
      console.log('er', er);
    }); 
  },[])

  const getCountries = useCallback(() => {
    api.get('/countries').then((response)=> {
      console.log('aqui ruan', response.data);
      setData(response.data);
    }).catch((er)=>{
      console.log('er', er);
    }); 
  },[])

  useEffect(() => {
    getCountriesOptions();
    getCountries()
  },[getCountriesOptions, getCountries])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(!selectedCountry || !selectedLocal || !selectedDate){
      setError(true);
      return ;
    }

    const newData = {
      name: selectedCountry,
      flag: countries.find((item)=> item.translations.por.common === selectedCountry)?.flags.svg,
      local: selectedLocal,
      meta: selectedDate
    }

    api.post('/countries', {...newData}).then((response) => {
      console.log('eni', response);
      setData([...data, response.data]);
    })
  }

  useEffect(() => {
    console.log('aaa', data)
  },[data])
  
  return (
    <Container>
      <SearchContainer>
        <Form onSubmit={handleSubmit}>
          <InputRow>
            <Grid justifyContent="center" container spacing={5}>
              <Grid item xs={2}>
                <MultipleSelect onSelect={(e) => {setSelectedCountry(e)}} countries={countries ?? []}/>
              </Grid>
              <Grid item xs={4}>
                <Col>
                  <span>Local</span>
                  <LocalInput onChange={(e) => setSelectedLocal(e.target.value)} placeholder="Digite o local que deseja conhecer" />
                </Col>
              </Grid>
              <Grid item xs={2}>
                <Col>
                  <span>Meta</span>
                  <InputMask mask="99/9999" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                    <MetaInput placeholder="mês/ano" />
                  </InputMask>
                </Col>
              </Grid>
              <Grid item xs={2}>
                <AddButton type="submit" >Adicionar</AddButton>
              </Grid>
            </Grid>
          </InputRow>
        </Form>
      </SearchContainer>

      <ListingContainer>
        {data.length > 0 && data.map((item: any, index) => (
          <Card key={index} onUpdate={() => getCountries()} countryId={item.id}></Card>
        ))}
      </ListingContainer>

      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error" variant="filled" sx={{ width: '100%' }}>
          É necessário preencher todos os campos.
        </Alert>
      </Snackbar>

      
     
    </Container>
  );
};

export default Listing;
