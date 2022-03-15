export interface PropsSelectedLocale {
  selectedCountry: SelectedCountry;
  locale: string;
  date: string;
}

export interface PropsCardLocale {
  item: PropsSelectedLocale;
}

export interface SelectedCountry {
  name?: string;
  flag?: string;
  translations?: { br?: string };
}
