import { useState } from "react";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Formulario from "./Componentes/Formulario/Index";
import MiOrg from "./Componentes/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <div></div>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
