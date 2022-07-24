import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Nav from "./components/Nav";
import Inicio from "./components/Inicio";
import Perfil from "./components/Perfil";
import Noticias from "./components/Noticias";
import Crypto from "./components/Crypto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./components/Sign";

function App() {
  return (
    
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/noticias" element={<Noticias />} /> 
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/sign" element={<Sign />} />   
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
