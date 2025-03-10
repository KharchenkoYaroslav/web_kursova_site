import axios from "axios";

const api = axios.create({
  baseURL: "https://exemple.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

//Функція для отримання якихось данних з сервера
export const fetchExemple = async () => {
  const { data } = await api.get("/exemple");
  return data;
};

export default api;
