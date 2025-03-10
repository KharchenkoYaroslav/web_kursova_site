import { useQuery } from "@tanstack/react-query";
import { fetchExemple } from "../services/api";

// Приклад хука
export const useExemple= () => {
  return useQuery({ queryKey: ["exemple"], queryFn: fetchExemple });  
};
