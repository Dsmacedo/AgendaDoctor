import axios from "axios";

import { API_URL } from "./api_url/api";

export const api = axios.create({
  baseURL: `${API_URL}`, // Porta do seu backend NestJS
  headers: {
    "Content-Type": "application/json",
  },
});
