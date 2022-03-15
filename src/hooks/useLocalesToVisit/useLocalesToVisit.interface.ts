export interface PropsReturnHook {
  addCountry: (countryName: string, locale: string, date: string) => void;
  selectedLocales: PropsSelectedLocale[];
}

export interface PropsSelectedLocale {
  selectedCountry: {};
  locale: string;
  date: string;
}
