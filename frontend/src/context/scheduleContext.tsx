import React from 'react';
import dataBaseApi from '../services/dataBaseApi';

export const ScheduleContext =
    React.createContext<ScheduleContext | null>(null);

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

export const useScheduleContext = (): ScheduleContext => {
    const context = React.useContext(ScheduleContext);
    if (!context) {
        throw new Error(
            'Deve-se usar um contexto dentro de um ScheduleProvider',
        );
    }
    return context;
};
