import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

//Páginas
import Inicio from './components/Inicio'
import CandidatosLista from './components/CandidatosLista'
import Contacto from './components/Contacto'
import Error404 from './components/Error404'

//Java Script and XML
export default function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/candidatos' element={<CandidatosLista />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )

}