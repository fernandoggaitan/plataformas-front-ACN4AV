import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Contextos
import { AuthProvider } from './contexts/AuthContext'

//Componentes
import Menu from './components/Menu'
import ProtectedRoute from './contexts/ProtectedRoute'

//Páginas
import Inicio from './Pages/Inicio'
import Personas from './Pages/Personas'
import CandidatosLista from './Pages/CandidatosLista'
import Contacto from './Pages/Contacto'
import Error404 from './Pages/Error404'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

//Java Script and XML
export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/candidatos' element={<CandidatosLista />} />
          <Route path='/personas' element={<Personas />} />
          <Route path='/personas/:gender' element={<Personas />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )

}