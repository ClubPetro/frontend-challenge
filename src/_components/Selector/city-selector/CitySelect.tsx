import React from 'react';
import {CitySelectorField, SelectorLabel, MainTextField} from './../Selector.style';


export default function CitySelect({selectedCity, onCitySelected}: any){
    return(
        <CitySelectorField>
            <SelectorLabel>
                Local
            </SelectorLabel>
            <MainTextField value={selectedCity} onChange={onCitySelected} className="cityTextField">

            </MainTextField>            

            </CitySelectorField>
    )
}