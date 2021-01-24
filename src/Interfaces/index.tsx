export interface ICountry {
  translations: {
    br: string;
  };
  flag: string;
}

export interface IGoal {
  id: string;
  country: ICountry;
  spot: string;
  date: string;
}
