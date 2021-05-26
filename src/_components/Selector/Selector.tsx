import React from 'react';
import {GreenBox, SelectorField, SelectorLabel} from './Selector.style';
import TextField from '@material-ui/core/TextField';
import Select from  '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CountrySelector from './country-selector/CountrySelector';

// const BootstrapInput = withStyles((theme) => ({
//     root: {
//       'label + &': {
//         marginTop: theme.spacing(3),
//       },
//     },
//     input: {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #ced4da',
//       fontSize: 16,
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//   }))(InputBase);
  

export default function Selector(){


    const [selectedCountry, setSelectedCountry] = React.useState('');
    const [selectedCity, setSelectedCity] = React.useState('');
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const grabSelectedCountry = (event: any) =>{
      console.log("Selecting country",  event.target.value);
      setSelectedCountry(event.target.value);
    }

    return(
        <GreenBox>
            
            {/* <SelectorField>
            <SelectorLabel>
                Local
            </SelectorLabel>
            <TextField>

            </TextField>            

            </SelectorField>

            <SelectorField>
            <SelectorLabel>
                Meta
            </SelectorLabel>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
            </MuiPickersUtilsProvider>

            // </SelectorField> */}

            <CountrySelector onCountrySelected={grabSelectedCountry} selectedCountry={selectedCountry}/>
            
        </GreenBox>
    );
}