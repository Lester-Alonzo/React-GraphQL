const Navegacion = ({ mas, menos }) => {
  return (
    <div className="nave">
      <button onClick={() => menos()}>Atras</button>
      <button onClick={() => mas()}>Adelante</button>
    </div>
  );
};
export default Navegacion;
