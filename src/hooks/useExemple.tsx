import { useQuery } from "@tanstack/react-query";
import { fetchExemple } from "../services/api";

// Приклад
function Exemple() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["exemple"],
    queryFn: fetchExemple,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error instanceof Error ? error.message : "Unknown error"}</div>;

  return (
    <ul>
      {data?.map((exemple: { id: number; name: string }) => (
        <li key={exemple.id}>{exemple.name}</li>
      ))}
    </ul>
  );
}

export default Exemple;
