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
    <section className="grid-colum2">
      {ModalV ? <Modal personage={result} modalState={setModalV} /> : null}

      {personaje.map((perso) => (
        <div key={v4()} className="meora">
          <img src={perso.image} alt="character" className="imgModal" />
          <div className="flex-colum">
            <h2>Nombre: {perso.name}</h2>
            <p>Genero: {perso.gender}</p>
            <span className="denomi">
              Estatus:{" "}
              <span className={perso.status === "Dead" ? "dead" : "comon"}>
                {" "}
                {perso.status}
              </span>
            </span>
            <button className="ver" onClick={() => personaId(perso.id)}>
              Ver mas
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Char;
