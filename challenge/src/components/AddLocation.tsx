import React, { useState, useEffect } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import InputMask from 'react-input-mask'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

const AddLocation = () => {
    const [country, setCountry] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [plan, setPlan] = useState<string>('')
    const [countryList, setCountryList] = useState<any>([])

    async function fetchCountryList() {
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            const listedCountries: Object[] = response.data
            setCountryList(() => listedCountries)
            console.log(response);
        }
        catch (error) {

        }
    }

    useEffect(() => {
        fetchCountryList()
    }, [])

    interface translationCountryNames {
        pt: string
    }

    interface countryAPI {
        translations: translationCountryNames,
        flag: string 
    }

    return (
        <div className="add_location_section">
            <form>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">País</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={country}
                        onChange={setCountry((e: React.ChangeEvent<HTMLInputElement>) => e.target.value)}
                    >
                        {countryList.map((country) => {
                            
                            return (
                                <MenuItem value={country.translations.pt}>{country.translations.pt}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <TextField id="standard-basic" label="Local" value={location} />
                <InputMask
                    mask="99/9999"
                    maskChar={null}
                    value={plan}
                   
                />;
        </form>
        </div>
    )
}

export default AddLocation