import axios from "axios";

// https://viacep.com.br/ws/37508000/json/

export const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

// export default api;
