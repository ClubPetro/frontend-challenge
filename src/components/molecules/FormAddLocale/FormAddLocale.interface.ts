export interface FormAddLocaleProps extends PropsCardLocale {
  edit?: boolean;
}

export interface PropsSelectedLocale {
  selectedCountry: SelectedCountry;
  locale: string;
  date: string;
}

export interface PropsCardLocale {
  item?: PropsSelectedLocale;
  indexPosition?: number;
}

export interface SelectedCountry {
  name?: string;
  flag?: string;
  translations?: { br?: string };
}
