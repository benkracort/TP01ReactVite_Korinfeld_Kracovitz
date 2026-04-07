import { useState } from 'react'
import './App.css'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'

function App() {
  const [citas, setCitas] = useState([])

  const agregarCita = (cita) => {
    setCitas([...Appcitas, cita])
  }

  return (
    <>
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <Formulario agregarCita={agregarCita}/>
          <Listado/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
