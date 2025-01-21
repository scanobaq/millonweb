import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:5162/api",
  headers: {
    "Content-Type": "application/json",
  },
});
