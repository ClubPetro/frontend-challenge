import React, { useEffect, useState } from 'react';
import {SelectorField, SelectorLabel, CustomizedSelect} from './../Selector.style';

import { MenuItem } from '@material-ui/core';


export default function CountrySelector({selectedCountry, onCountrySelected}:any){
    const initialValue: any[] = [];

    const [listOfCountries, setListOfCountries] = useState(initialValue)

    //TODO add types on countries
    const fetchCountries = async ()=>{
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json();
        setListOfCountries(data);
    }

    useEffect(()=>{
        console.log(onCountrySelected);
        if(listOfCountries.length < 2){
            fetchCountries();
        }
    }, [])
    // fetchCountries();
    return(
        <SelectorField>
            <SelectorLabel>
                País
            </SelectorLabel>
            <CustomizedSelect
          labelId="demo-customized-select-label"
          id="demo-customized-select" value={selectedCountry} onChange={onCountrySelected}
        //   input={<BootstrapInput/>}
        >
            <MenuItem value='Selecione uma opção'>
            <em>Selecione uma opção</em>
          </MenuItem>

            {
                listOfCountries.map((e:any)=>{
                   return <option key={parseInt(e.numericCode)} value={e.name}>{e.name}</option>
                })
            }

           
        </CustomizedSelect>
            </SelectorField>
    )
}