import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Formulario from "./Componentes/Formulario/Index";
import MiOrg from "./Componentes/MiOrg";
import Equipo from "./Componentes/Equipo";
import Footer from "./Componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Lohora",
      puesto: "Instructor",
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harlan",
      puesto: "Instructor en Alura",
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Velasco",
      puesto: "Head de Alura",
    },
    {
      id: uuid(),
      equipo: "Inovacion y Gestion",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Jose",
      puesto: "Dev FullStack",
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#D86EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Inovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Resgistrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  };

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
