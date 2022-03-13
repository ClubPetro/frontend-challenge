import { apiCountries } from "../api";

export const getAllCountries = async () => {
  const returnApi = await apiCountries
    .get(`/v2/all`)
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};
