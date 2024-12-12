import { useState } from "react";
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
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },
    {
      equipo: "Programacion",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Lohora",
      puesto: "Instructor",
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harlan",
      puesto: "Instructor en Alura",
    },
    {
      equipo: "Programacion",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Velasco",
      puesto: "Head de Alura",
    },
    {
      equipo: "Inovacion y Gestion",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Jose",
      puesto: "Dev FullStack",
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

  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#D86EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Inovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

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
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
