import { v4 } from "uuid";
const Modal = ({ personage, modalState }) => {
  if (personage?.data?.character === undefined) return null;
  const cerrar = () => {
    modalState(false);
  };
  let char = personage?.data?.character;
  console.log(char);
  return (
    <div className="modal">
      <div className="flex-colum tarjeta">
        <h1>Nombre: {char.name}</h1>
        <img src={char.image} alt={char.name} />
        <span>Especie: {char.species}</span>
        <span className="denomi">
          Estatus:{" "}
          <span className={char.status === "Dead" ? "dead" : "comon"}>
            {" "}
            {char.status}
          </span>
        </span>
        <span>Tipo: {char.type === "" ? "?" : char.type}</span>
        <span>Locacion: {char?.location?.name}</span>
        <ul className="episodios">
          <h3>Episodios donde aparece : ({char?.episode.length}) </h3>
          {char?.episode.map((episo) => (
            <li key={v4()}>{episo.name}</li>
          ))}
        </ul>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
};
export default Modal;
