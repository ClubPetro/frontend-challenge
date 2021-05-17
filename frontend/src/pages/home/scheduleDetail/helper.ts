import React from 'react';

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

export const handleSelectChange = (
    event: React.FormEvent<HTMLSelectElement>,
    schedule: Schedule,
    setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    countryList: CountryApiData[],
): void => {
    const { value } = event.currentTarget;
    setSchedule({
        ...schedule,
        country: value,
        flag: countryList.filter(item => item.translations.br === value)[0]
            .flag,
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
