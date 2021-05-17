import React from 'react';
import { fetchCountryDetails } from '../helper';

export const filterCurrentSchedule = (
    scheduleList: Schedule[],
    setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    scheduleId: string,
): void => {
    const filteredArr = scheduleList.filter(item => item.id === scheduleId);
    setSchedule(filteredArr[0]);
};

export const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>,
    schedule: Schedule,
    setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
): void => {
    const { id, value } = event.currentTarget;
    setSchedule({ ...schedule, [id]: value });
};

// export const handleSelectChange = (
//     event: React.FormEvent<HTMLSelectElement>,
//     schedule: Schedule,
//     setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
//     countryList: CountryApiData[],
// ): void => {
//     const { value } = event.currentTarget;
//     setSchedule({
//         ...schedule,
//         country: value,
//         flag: countryList.filter(
//             item => item.translations.br === schedule.country,
//         )[0].flag,
//     });
// };
export const handleSelectChange = (
    event: React.FormEvent<HTMLSelectElement>,
    schedule: Schedule,
    setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
): void => {
    const { value } = event.currentTarget;
    fetchCountryDetails(value).then(res => {
        if (typeof res !== 'string') {
            setSchedule({
                ...schedule,
                country: value,
                flag: res[0].flag,
            });
        }
    });
};

export const handleFormSubmit = (
    event: React.FormEvent,
    scheduleList: Schedule[],
    setScheduleList: React.Dispatch<React.SetStateAction<Schedule[]>>,
    schedule: Schedule,
): void => {
    event.preventDefault();
    const newArr = scheduleList.filter(item => item.id !== schedule.id);
    newArr.push(schedule);
    setScheduleList(newArr);
};
