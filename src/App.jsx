import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import Home from "./componentes/Home/Home";
import DetallePersona from "./componentes/Home/DetallePersona";
import Estadisticas from "./componentes/Home/Estadisticas";
import FormularioContacto from "./componentes/Contacto/FormularioContacto";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/persona/:id" element={<DetallePersona />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/contacto" element={<FormularioContacto />} />
        <Route path="*" element={<h1>404. No encontramos lo que buscás 😕</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
