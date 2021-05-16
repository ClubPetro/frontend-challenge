import React from 'react';
import countryApi from '../../services/countryApi';

export const parseApiDataToStringArray = (arr: CountryApiData[]): string[] => {
    const newStringArr: string[] = [];
    arr.map(item => newStringArr.push(item.translations.br));
    return newStringArr;
};

export async function getCountriesFromApi(
    setCountryList: React.Dispatch<React.SetStateAction<string[]>>,
): Promise<void> {
    const { data } = await countryApi.get<CountryApiData[]>(
        '/all?fields=translations;flag',
    );

    setCountryList(parseApiDataToStringArray(data));
}

export async function fetchCountryDetails(
    countryName: string,
): Promise<CountryApiData[] | string> {
    try {
        const { data } = await countryApi.get<CountryApiData[]>(
            '/all?fields=translations;flag',
        );
        const filteredArray = data.filter(
            item => item.translations.br === countryName,
        );
        return filteredArray;
    } catch (err) {
        return 'Algo deu errado! Tente novamente';
    }
}
