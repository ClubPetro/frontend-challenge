export interface PropsReturnHook {
  addCountry: (countryName: string, locale: string, date: string) => void;
  editCountry: (indexPosition: number, locale: string, date: string) => void;
  removeCountry: (indexPosition: number) => void;
  selectedLocales: PropsSelectedLocale[];
}

export interface PropsSelectedLocale {
  selectedCountry: {};
  locale: string;
  date: string;
}
