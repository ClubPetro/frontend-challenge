import axios from 'axios';

export const getCountries = async () => {
  const { data } = await axios.get('https://restcountries.com/v2/all');

  return data;
};

export const setPlace = async (values: Inputs): Promise<Inputs> => {
  const response = await axios.post('http://localhost:3001/places', values);

  return response.data;
};

export const getPlaces = async (): Promise<Inputs[]> => {
  const response = await axios.get('http://localhost:3001/places');

  return response.data;
};

export const deletePlace = async (id: string): Promise<Inputs> => {
  const response = await axios.delete(`http://localhost:3001/places/${id}`);

  return response.data;
};

export const updatePlace = async (id: string, values: any): Promise<Inputs> => {
  const response = await axios.patch(
    `http://localhost:3001/places/${id}`,
    values
  );

  return response.data;
};
