export interface CountrySelect {
  flag: string;
  name: string;
}

export interface Place {
  meta: string;
  country: {
    name: string;
    flag: string;
  };
  id: string;
  place: string;
}