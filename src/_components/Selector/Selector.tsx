import React from 'react';
import {AlignContainer, CustomizedButton, GreenBox} from './Selector.style';
import CountrySelector from './country-selector/CountrySelector';
import CitySelect from './city-selector/CitySelect';
import DateSelector from './date-selector/DateSelector';
import Country from '../../_models/Country';


export default function Selector({onSentFlightData, listOfCountries}: any){


    const [selectedCountry, setSelectedCountry] = React.useState('1');
    const [selectedCity, setSelectedCity] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState('');
    const [formIsValid, setFormIsValid] = React.useState(false);

    /**
     * Função para pegar parâmetro de país.
     * @param event - evento de controller.
     */
    const grabSelectedCountry = (event: any) =>{
      setSelectedCountry(event.target.value);
    }
    /**
     * 
     * @param event evento de controller.
     */
    const grabSelectedCity = (event: any) =>{
      setSelectedCity(event.target.value);
    }

    /**
     * Função que armazena parametro de data.
     * @param event evento de controller.
     */
    const grabSelectedDate = (event: any) =>{
      setSelectedDate(event?.target.value);
    }


    /**
     * Função para enviar modelo de Viagem a escopo global.
     */
    const sentSelectedData = ()=>{
      const getSelectedCountry = listOfCountries.find((e:Country)=>e.numericCode === selectedCountry);
      let newObject = {country: getSelectedCountry, city: selectedCity, date: selectedDate}

      setSelectedCity('')
      setSelectedDate('')
      setSelectedCountry('1')
      setFormIsValid(false);
      onSentFlightData(newObject);
    }

    /**
     * Função de validação de formulário.
     */
    const validateForm = ()=>{
      let formIsValid = true;


      if(selectedCity.length<1){
        formIsValid = false;
      }
      if(selectedDate.length<1){
        formIsValid = false;
      }

      if(selectedCountry.length<1){
        formIsValid = false;
      }

      setFormIsValid(formIsValid);
    }

    return(
      <GreenBox>
        <AlignContainer>
          <CountrySelector onCountrySelected={(event: any)=>{grabSelectedCountry(event); validateForm();}} selectedCountry={selectedCountry} listOfCountries={listOfCountries} />
          <CitySelect selectedCity={selectedCity} onCitySelected={(event: any)=>{grabSelectedCity(event); validateForm()}} />
          <DateSelector selectedDate={selectedDate} onSelectedDateChange={(event:any)=>{grabSelectedDate(event); validateForm()}}></DateSelector>
          <CustomizedButton onClick={sentSelectedData} disabled={!formIsValid}> Adicionar</CustomizedButton>
        </AlignContainer>
      </GreenBox>
    );
}