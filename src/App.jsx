import { useState } from 'react'
import './App.css'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'

function App() {
  const [citas, setCitas] = useState([])

  const agregarCita = (cita) => {
    setCitas([...citas, cita])
  }

  return (
    <>
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario agregarCita={agregarCita}/>
          <Listado citas={citas}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
