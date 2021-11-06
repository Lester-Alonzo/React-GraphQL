import { v4 } from "uuid";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { FIND_ONE_PERSON } from "./rickandmorty/rickmorty-querys";
import Modal from "./Modal";
import "./App.css";
const Char = ({ personaje }) => {
  const [ModalV, setModalV] = useState(false);
  const [getChar, result] = useLazyQuery(FIND_ONE_PERSON);
  if (!personaje) return null;
  const personaId = (id) => {
    getChar({ variables: { id: id } });
    setModalV(true);
  };
  return (
    <section className="grid-colum3">
      {ModalV ? <Modal personage={result} modalState={setModalV} /> : null}

      {personaje.map((perso) => (
        <div key={v4()} onClick={() => personaId(perso.id)}>
          <h2>Nombre: {perso.name}</h2>
          <img src={perso.image} alt="character" />
          <p>Genero: {perso.gender}</p>
          <span>Estatus: {perso.status}</span>
        </div>
      ))}
    </section>
  );
};
export default Char;
