import React from 'react';
import dataBaseApi from '../services/dataBaseApi';

export const ScheduleContext = React.createContext<ScheduleContext>(
    {} as ScheduleContext,
);

export const ScheduleProvider = ({
    children,
}: ScheduleProviderProps): React.ReactElement => {
    const [scheduleList, setScheduleList] = React.useState<Schedule[]>([]);

    async function getDataFromDataBaseApi() {
        try {
            const response = await dataBaseApi.get('/schedules');
            if (response.status >= 204) {
                throw new Error(`Error status: ${response.status}`);
            } else {
                setScheduleList(response.data);
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }

    React.useEffect(() => {
        getDataFromDataBaseApi();
    }, []);

    return (
        <ScheduleContext.Provider value={{ scheduleList, setScheduleList }}>
            {children}
        </ScheduleContext.Provider>
    );
};
