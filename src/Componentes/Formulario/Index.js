import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
  const [color, actualizarColor] = useState("");
  const [titulo, actualizarTitulo] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAenviar = { nombre, puesto, foto, equipo };

    registrarColaborador(datosAenviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <CampoTexto
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <CampoTexto
          titulo="Color"
          placeholder="Ingresar Color en Hex"
          required
          valor={color}
          actualizarValor={actualizarColor}
        />
        <Boton texto="Registrar Equipo" />
      </form>
    </section>
  );
};

export default Formulario;
