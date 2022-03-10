import api from "../api";

export const getAllCountries = async () => {
  const returnApi = await api
    .get(`/v2/all`)
    .then((response: any) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};
