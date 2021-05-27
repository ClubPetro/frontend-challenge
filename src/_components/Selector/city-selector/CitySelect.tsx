import React from 'react';
import {SelectorField, SelectorLabel} from './../Selector.style';
import TextField from '@material-ui/core/TextField';


export default function CitySelect({selectedCity, onCitySelected}: any){
    return(
        <SelectorField>
            <SelectorLabel>
                Local
            </SelectorLabel>
            <TextField onChange={onCitySelected}>

            </TextField>            

            </SelectorField>
    )
}