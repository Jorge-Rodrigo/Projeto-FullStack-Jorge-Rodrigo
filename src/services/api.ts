import axios from "axios";

export const api = axios.create({
  baseURL: "https://contacts-book-api.onrender.com",
  timeout: 10000,
});
