import { useState } from 'react'
import './App.css'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <Formulario/>
          <Listado/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
