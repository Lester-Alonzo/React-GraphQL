import { useQuery } from "@apollo/client";
import { ALL_CHAR } from "./rickandmorty/rickmorty-querys";
import Char from "./Char";
import "./App.css";

function App() {
  const { data, error, loading } = useQuery(ALL_CHAR);
  if (error) return null;
  return (
    <>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <>
          <h1 className="text-center">Rick and Morty</h1>
          <Char personaje={data.characters.results} />
        </>
      )}
    </>
  );
}

export default App;
