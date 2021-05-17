import React from 'react';
import dataBaseApi from '../services/dataBaseApi';

export const ScheduleContext =
    React.createContext<ScheduleContext | null>(null);

export const ScheduleProvider = ({
    children,
}: ScheduleProviderProps): React.ReactElement => {
    const [scheduleList, setScheduleList] = React.useState<Schedule[]>([]);

    async function getSchedules() {
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

    async function deleteSchedule(scheduleId: string) {
        try {
            const response = await dataBaseApi.delete(
                `/schedules/${scheduleId}`,
            );

            if (response.status > 204) {
                throw new Error(`Error status: ${response.status}`);
            } else {
                getSchedules();
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }

    async function createSchedule(schedule: Schedule) {
        try {
            const response = await dataBaseApi.post('/schedules', schedule);

            if (response.status > 204) {
                throw new Error(`Error status: ${response.status}`);
            } else {
                getSchedules();
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }

    async function editSchedule(schedule: Schedule) {
        try {
            const response = await dataBaseApi.put(
                `/schedules/${schedule.id}`,
                schedule,
            );

            if (response.status > 204) {
                throw new Error(`Error Status: ${response.status}`);
            } else {
                getSchedules();
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }

    async function getSingleSchedule(
        scheduleId: string,
        setSchedule: React.Dispatch<React.SetStateAction<Schedule>>,
    ) {
        try {
            const response = await dataBaseApi.get(`/schedules/${scheduleId}`);
            if (response.status > 204) {
                throw new Error(`Error status: ${response.status}`);
            } else {
                setSchedule(response.data);
                getSchedules();
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }

    React.useEffect(() => {
        getSchedules();
    }, []);

    return (
        <ScheduleContext.Provider
            value={{
                scheduleList,
                setScheduleList,
                deleteSchedule,
                createSchedule,
                editSchedule,
                getSingleSchedule,
            }}
        >
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
