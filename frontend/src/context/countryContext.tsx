import { createContext, useEffect, useState } from 'react';
import countryApi from '../services/countryApi';

export const CountryContext = createContext({} as CountryContext);

export const CountryProvider = ({
    children,
}: CountryProviderProps): React.ReactElement => {
    const [countryList, setCountryList] = useState<CountryApiData[]>([]);

    async function getCountriesFromApi(): Promise<void> {
        const { data } = await countryApi.get<CountryApiData[]>(
            '/all?fields=translations;flag',
        );

        setCountryList(data);
    }

    useEffect(() => {
        getCountriesFromApi();
    }, []);

    return (
        <CountryContext.Provider value={{ countryList, setCountryList }}>
            {children}
        </CountryContext.Provider>
    );
};
