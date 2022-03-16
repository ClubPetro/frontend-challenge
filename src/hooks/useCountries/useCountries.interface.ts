export interface UseCountriesHookReturn {
  findAllCountries: () => void;
  countries: ApiCountriesResponse[];
}

export interface ApiCountriesResponse {
  name: string;
  translations: { br: string };
}
