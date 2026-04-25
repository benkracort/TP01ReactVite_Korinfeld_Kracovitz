import './Listado.css'

function Listado({ citas = [] }) {
  return (
    <div className ="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita, index) => (
        <div className ="cita" key={index}>
          <p>Mascota: <span>{cita.nombre}</span></p>
          <p>Dueño: <span>{cita.dueno}</span></p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Sintomas: <span>{cita.sintomas}</span></p><button className ="button elimnar u-full-width">Eliminar ×</button>
        </div>
      ))}
    </div>
  )
}
export default Listado;