import React from 'react';
import {SelectorField, SelectorLabel, CustomizedTextField} from './../Selector.style';
import InputMask from 'react-input-mask';




export default function DateSelector({selectedDate, onSelectedDateChange}:any){
    return(
        <SelectorField>
            <SelectorLabel>
                Meta
            </SelectorLabel>
            <InputMask mask="99/9999" value={selectedDate}
          onChange={onSelectedDateChange}>
            {(inputProps: any)=><CustomizedTextField {...inputProps}
          id="date-picker-inline"
           />}
            </InputMask>
            

             </SelectorField>
    )
}
