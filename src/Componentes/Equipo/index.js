import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo } = props.datos;

  const obj = {
    backgroundColor: colorSecundario,
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <section className="equipo" style={obj}>
      <h3 style={{ estiloTitulo }}>{titulo}</h3>
      <div className="colaboradores">
        <Colaborador />
      </div>
    </section>
  );
};

export default Equipo;
