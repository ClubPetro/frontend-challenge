import React from 'react';
import { SelectorLabel, CustomizedTextField, DateSelectorField} from './../Selector.style';
import InputMask from 'react-input-mask';




export default function DateSelector({selectedDate, onSelectedDateChange}:any){
    return(
        <DateSelectorField>
            <SelectorLabel>
                Meta
            </SelectorLabel>
            <InputMask mask="99/9999" value={selectedDate}
          onChange={onSelectedDateChange}>
            {(inputProps: any)=><CustomizedTextField {...inputProps}
           />}
            </InputMask>
            

             </DateSelectorField>
    )
}
