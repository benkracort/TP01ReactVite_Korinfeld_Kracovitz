import { use, useState } from 'react';
import './Formulario.css'

function Formulario({ agregarCita }) {
    const [nombre, setNombre] = useState("")
    const [dueno, setDueno] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    const submit = (e) => {
        e.preventDefault()
        const object = {
            nombre: nombre,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        }
        agregarCita(object)
    }

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
                <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={nombre} onChange={(e) => setNombre(e.target.value)}></input> <br />
                <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={dueno} onChange={(e) => setDueno(e.target.value)}></input> <br />
                <label>Fecha</label> <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={(e) => setFecha(e.target.value)}></input> <br />
                <label>Hora</label> <input type="time" name="hora" className="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)}></input> <br />
                <label>Sintomas</label> <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea> <br />
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button> <br />
            </form>
        </div>
    )
}

export default Formulario;