import React from 'react';
import {SelectorField, SelectorLabel, CustomizedTextField} from './../Selector.style';




export default function DateSelector({selectedDate, onSelectedDateChange}:any){
    return(
        <SelectorField>
            <SelectorLabel>
                Meta
            </SelectorLabel>
            <CustomizedTextField
          id="date-picker-inline"
          value={selectedDate}
          onChange={onSelectedDateChange} type="date"/>

             </SelectorField>
    )
}
