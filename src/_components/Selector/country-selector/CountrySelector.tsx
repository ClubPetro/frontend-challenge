import React from 'react';
import {SelectorLabel, CustomizedSelect, CountrySelectorField} from './../Selector.style';
import Country from '../../../_models/Country';


export default function CountrySelector({selectedCountry, onCountrySelected, listOfCountries}:any){
    
    return(
        <CountrySelectorField>
            <SelectorLabel>
                País
            </SelectorLabel>
            <CustomizedSelect select  value={selectedCountry} onChange={onCountrySelected} SelectProps={{
            native: true,
          }} variant="outlined"
        >
            <option value="1">Selecione uma opção</option>

            {
                listOfCountries.map((e: Country)=>{
                   return <option key={parseInt(e.numericCode)} value={e.numericCode}>{e.translations.br}</option>
                })
            }

           
        </CustomizedSelect>
            </CountrySelectorField>
    )
}