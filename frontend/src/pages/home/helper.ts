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

export const handlePromiseResult = (
    response: string | CountryApiData[],
    setIsThereError: React.Dispatch<React.SetStateAction<string>>,
    formData: ScheduleFormData,
    setScheduleList: React.Dispatch<React.SetStateAction<Schedule[]>>,
    scheduleList: Schedule[],
): void => {
    if (typeof response === 'string') {
        setIsThereError(response);
    } else {
        const newScheduleObject = {
            id: Math.random().toString().replace('0.', ''),
            flag: response[0].flag,
            country: formData.country,
            date: formData.date,
            location: formData.location,
        };
        setScheduleList([...scheduleList, newScheduleObject]);
    }
};

export const handleFormSubmit = (
    e: React.FormEvent,
    setIsThereError: React.Dispatch<React.SetStateAction<string>>,
    formData: ScheduleFormData,
    setFormData: React.Dispatch<React.SetStateAction<ScheduleFormData>>,
    scheduleList: Schedule[],
    setScheduleList: React.Dispatch<React.SetStateAction<Schedule[]>>,
): void => {
    e.preventDefault();
    fetchCountryDetails(formData.country).then(response =>
        handlePromiseResult(
            response,
            setIsThereError,
            formData,
            setScheduleList,
            scheduleList,
        ),
    );
    setFormData({
        country: '',
        location: '',
        date: '',
    });
};

export const handleTextInputChange = (
    event: React.FormEvent<HTMLInputElement>,
    formData: ScheduleFormData,
    setFormData: React.Dispatch<React.SetStateAction<ScheduleFormData>>,
): void => {
    const { id, value } = event.currentTarget;
    setFormData({ ...formData, [id]: value });
};

export const handleSelectInputChange = (
    event: React.FormEvent<HTMLSelectElement>,
    formData: ScheduleFormData,
    setFormData: React.Dispatch<React.SetStateAction<ScheduleFormData>>,
): void => {
    const { id, value } = event.currentTarget;
    setFormData({ ...formData, [id]: value });
};
