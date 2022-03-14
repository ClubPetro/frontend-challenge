import { Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import countriesApi from "../../services/countriesApi";
import { ContriesResponse, Country } from "../../types";
import MultipleSelect from "../MultipleSelect";

import { Container, SearchContainer, InputRow, Col, LocalInput, MetaInput, AddButton, ListingContainer } from "./styles";
import Card from "../Card";
import api from "../../services/api";

const Listing: React.FC = () => {

  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<String>('');
  const [selectedLocal, setSelectedLocal] = useState<String>('')
  const [selectedDate, setSelectedDate] = useState<String>('')

  const [data, setData] = useState<ContriesResponse[]>([]);

  const getCountries = useCallback(() => {
    countriesApi.get('/all').then((response)=> {
      setCountries(response.data);
    }).catch((er)=>{
      console.log('er', er);
    }); 
  },[])
  
  useEffect(() => {
    getCountries();
  },[getCountries])


  const handleSubmit = () => {
    const newData = {
      country: selectedCountry,
      local: selectedLocal,
      meta: selectedDate
    }

    api.post('/countries', {...newData}).then((response) => {
      console.log('eni', response);
      setData([...data, response.data]);
    })

    console.log('adsdasj', data)
  }

  useEffect(() => {
    console.log('aaa', data)
  },[data])
  
  return (
    <Container>
      <SearchContainer>
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
                <MetaInput onChange={(e) => setSelectedDate(e.target.value)} placeholder="mês/ano" />
              </Col>
            </Grid>
            <Grid item xs={2}>
              <AddButton onClick={handleSubmit}>Adicionar</AddButton>
            </Grid>
          </Grid>
        </InputRow>
      </SearchContainer>

      <ListingContainer>
        {data.length > 0 && data.map((item: any, index) => (
          <Card key={index} countryName={item.country}></Card>
        ))}
      </ListingContainer>
    </Container>
  );
};

export default Listing;
