import Sitios from './componentes/Sitios';
import  Servicios  from './componentes/Servicios';
import Formulario from './componentes/Formulario';
import Fcamping from './componentes/Fcamping';
import Home from './componentes/Home';
import { Nadvar } from './componentes/Nadvar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 
import injectContext from "./store/context"; 

function App() {
  return (
    <BrowserRouter>
    <Nadvar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Formulario" element={<Formulario />} />
     <Route path="/Fcamping" element={<Fcamping />} />
     <Route path="/Servicios" element={<Servicios />} />
     <Route path="/Sitios" element={<Sitios />} />
     </Routes>
    </BrowserRouter>
    
  )
}


export default injectContext(App);