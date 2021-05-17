interface ScheduleFormData {
    country: string;
    location: string;
    date: string;
}

interface Schedule extends ScheduleFormData {
    id: string;
    flag: string;
}

interface ScheduleContext {
    scheduleList: Schedule[];
    setScheduleList: React.Dispatch<React.SetStateAction<Schedule[]>>;
}

interface ScheduleProviderProps {
    children: React.ReactNode;
}

interface CountryApiData {
    translations: {
        br: string;
    };
    flag: string;
}

interface DataBaseApiData {
    scheduleList: Schedule[];
}

interface CountryContext {
    countryList: CountryApiData[];
    setCountryList: React.Dispatch<React.SetStateAction<CountryApiData[]>>;
}

interface CountryProviderProps {
    children: React.ReactNode;
}
