import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const apiFetch = axios.create({
  baseURL,
  headers: {
    "Content-type": "applicatoin/json",
  },
});
