import { apiJsonServer } from "../api";

interface bodyProps {
  local?: string;
  title?: string;
  goal?: string;
  checkboxPais?: string;
  img?: string;
}

export const getAllCards = async () => {
  const returnApi = await apiJsonServer
    .get("/places")
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};

export const postCard = async (body: bodyProps) => {
  const returnApi = await apiJsonServer
    .post("/places", { ...body })
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};

export const getCardId = async (id: number) => {
  const returnApi = await apiJsonServer
    .get("/places", { params: { id } })
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};

export const patchCardId = async (id: number, body: bodyProps) => {
  const returnApi = await apiJsonServer
    .put(`/places/${id}`, { ...body })
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};

export const deleteCardId = async (id: number | undefined) => {
  const returnApi = await apiJsonServer
    .delete(`/places/${id}`)
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};