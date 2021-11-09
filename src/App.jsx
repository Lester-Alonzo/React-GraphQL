import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_CHAR } from "./rickandmorty/rickmorty-querys";
import { usePeticion } from "./rickandmorty/CustomHook";
import Loader from "./Loader";
import Char from "./Char";
import "./App.css";

function App() {
  const { data, error, loading } = useQuery(ALL_CHAR);
  const [Nombre, setNombre] = useState("");
  const [Cambio, setCambio] = useState(false);
  const { result, first, setName } = usePeticion();
  const ped = (e) => {
    setNombre(e.target.value);
    setName(Nombre);
  };
  const pet = () => {
    setCambio(true);
    first();
  };
  let sett;
  if (Cambio) {
    sett = result?.data?.characters?.results;
  } else {
    sett = data?.characters?.results;
  }
  console.log();
  if (error) return null;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-center">Rick and Morty</h1>
          <div className="busqueda">
            <input type="text" placeholder="Buscar" onChange={ped} />
            <button onClick={pet}>Buscar</button>
          </div>
          <Char personaje={sett} />
          {/* <Navegacion mas={mas} menos={menos} /> */}
        </>
      )}
    </>
  );
}

export default App;
