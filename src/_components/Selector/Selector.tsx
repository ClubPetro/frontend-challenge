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

    const grabSelectedCountry = (event: any) =>{
      setSelectedCountry(event.target.value);
    }

    const grabSelectedCity = (event: any) =>{
      setSelectedCity(event.target.value);
    }

    const grabSelectedDate = (event: any) =>{
      setSelectedDate(event?.target.value);
    }

    const sentSelectedData = ()=>{
      const getSelectedCountry = listOfCountries.find((e:Country)=>e.numericCode === selectedCountry);
      let newObject = {country: getSelectedCountry, city: selectedCity, date: selectedDate}

      setSelectedCity('')
      setSelectedDate('')
      setSelectedCountry('')
      onSentFlightData(newObject);
    }

    return(
      <GreenBox>
        <AlignContainer>
          <CountrySelector onCountrySelected={grabSelectedCountry} selectedCountry={selectedCountry} listOfCountries={listOfCountries} />
          <CitySelect selectedCity={selectedCity} onCitySelected={grabSelectedCity} />
          <DateSelector selectedDate={selectedDate} onSelectedDateChange={grabSelectedDate}></DateSelector>
          <CustomizedButton onClick={sentSelectedData}> Adicionar</CustomizedButton>
        </AlignContainer>
      </GreenBox>
    );
}