import { apiJsonServer } from "../api";

interface bodyProps {
  local?: string;
  meta?: string;
  checkboxPais?: string;
  img?: string;
}

export const postCard = async (body: bodyProps) => {
  const returnApi = await apiJsonServer
    .post("/cards", { ...body })
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};

export const getAllCards = async () => {
  const returnApi = await apiJsonServer
    .get("/cards")
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};

export const getCardId = async (id: number) => {
  const returnApi = await apiJsonServer
    .get("/cards", { params: { id } })
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};

export const patchCardId = async (id: number, body: bodyProps) => {
  const returnApi = await apiJsonServer
    .put(`/cards/${id}`, { ...body })
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};

export const deleteCardId = async (id: number | undefined) => {
  const returnApi = await apiJsonServer
    .delete(`/cards/${id}`)
    .then((response) => response)
    .then((data) => data.data)
    .catch((err) => console.log(err));
  return returnApi;
};
