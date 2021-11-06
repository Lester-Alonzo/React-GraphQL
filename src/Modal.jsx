const Modal = ({ personage, modalState }) => {
  if (personage?.data?.character === undefined) return null;
  const cerrar = () => {
    modalState(false);
  };
  let char = personage?.data?.character;
  console.log(char);
  return (
    <div className="modal">
      <div className="flex-colum">
        <h1>Nombre: {char.name}</h1>
        <img src={char.image} alt={char.name} />
        <span>Especie: {char.species}</span>
        <span>Estatus: {char.status}</span>
        <span>Tipo: {char.type === "" ? "?" : char.type}</span>
        <span>Locacion: {char?.location?.name}</span>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
};
export default Modal;
