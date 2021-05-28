import React from 'react';
import {CustomizedButton, GreenBox} from './Selector.style';
import CountrySelector from './country-selector/CountrySelector';
import CitySelect from './city-selector/CitySelect';
import DateSelector from './date-selector/DateSelector';


export default function Selector({onSentFlightData}: any){


    const [selectedCountry, setSelectedCountry] = React.useState('');
    const [selectedCity, setSelectedCity] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

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
      let newObject = {country: selectedCountry, city: selectedCity, date: selectedDate}
      onSentFlightData(newObject);
    }

    return(
        <GreenBox>
            <CountrySelector onCountrySelected={grabSelectedCountry} selectedCountry={selectedCountry}/>
            <CitySelect selectedCity={selectedCity} onCitySelected={grabSelectedCity}/>
            <DateSelector selectedDate={selectedDate} onSelectedDateChange={grabSelectedDate}></DateSelector>
            <CustomizedButton onClick={sentSelectedData}> Adicionar</CustomizedButton>            
        </GreenBox>
    );
}