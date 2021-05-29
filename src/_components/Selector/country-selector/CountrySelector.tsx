import React, { useEffect, useState } from 'react';
import {SelectorField, SelectorLabel, CustomizedSelect} from './../Selector.style';

import { MenuItem } from '@material-ui/core';
import Country from '../../../_models/Country';


export default function CountrySelector({selectedCountry, onCountrySelected, listOfCountries}:any){
    
    return(
        <SelectorField>
            <SelectorLabel>
                País
            </SelectorLabel>
            <CustomizedSelect
          labelId="demo-customized-select-label"
          id="demo-customized-select" value={selectedCountry} onChange={onCountrySelected}
        >
            <MenuItem value='Selecione uma opção'>
            <em>Selecione uma opção</em>
          </MenuItem>

            {
                listOfCountries.map((e: Country)=>{
                   return <option key={parseInt(e.numericCode)} value={e.numericCode}>{e.name}</option>
                })
            }

           
        </CustomizedSelect>
            </SelectorField>
    )
}