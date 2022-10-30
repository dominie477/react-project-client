import axios from "axios";
import { Card } from "../interfaces/Card";
import _ from "lodash";

const api: string = process.env.REACT_APP_API || "";

// add Card
export const addCard = (newCard: Card): Promise<any> => {
  return axios.post(`${api}cards`, newCard, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Get all Cards
export const getAllCards = (): Promise<any> => {
  return axios.get(`${api}cards`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Get prodcut By ID
export const getCard = (id: string): Promise<any> => {
  return axios.get(`${api}cards/${id}`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Edit Card
export const editCard = (card: Card): Promise<any> => {
  let body = _.omit(card, ["_id"]);
  return axios.put(`${api}cards/${card._id}`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// delete card
export const deleteCard = (id: string): Promise<any> =>
  axios.delete(`${api}cards/${id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
