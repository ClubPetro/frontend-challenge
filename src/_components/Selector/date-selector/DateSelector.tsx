import React from 'react';
import {GreenBox, SelectorField, SelectorLabel} from './../Selector.style';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';




export default function DateSelector({selectedDate, onSelectedDateChange}:any){
    return(
        <SelectorField>
            <SelectorLabel>
                Meta
            </SelectorLabel>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/yyyy"
          id="date-picker-inline"
          value={selectedDate}
          onChange={onSelectedDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
            </MuiPickersUtilsProvider>

             </SelectorField>
    )
}
