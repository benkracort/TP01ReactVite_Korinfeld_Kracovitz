import './Formulario.css'

function Formulario() {
    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
                <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value=""></input> <br/>
                <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input> <br/>
                <label>Fecha</label> <input type="date" name="fecha" className="u-full-width" value=""></input> <br/>
                <label>hora</label> <input type="time" name="hora" className="u-full-width" value=""></input> <br/>
                <label>Sintomas</label> <textarea name="sintomas" className="u-full-width"></textarea> <br/>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button> <br/>
            </form>
        </div>
    )
}
export default Formulario;