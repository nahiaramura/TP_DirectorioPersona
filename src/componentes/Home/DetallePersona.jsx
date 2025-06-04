import { useParams } from "react-router-dom";
import personas from "../../assets/people.json";
import "./DetallePersona.css";

const DetallePersona = () => {
  const { id } = useParams();
  const persona = personas.find((p) => p.id === parseInt(id));

  if (!persona) {
    return (
      <div className="detalle-container">
        <h2 className="detalle-error">Persona no encontrada 😕</h2>
      </div>
    );
  }

  const mensaje = persona.edad >= 18 ? "Mayor de edad" : "Menor de edad";

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <h2 className="detalle-nombre">{persona.nombre} {persona.apellido}</h2>
        <p><strong>Edad:</strong> {persona.edad}</p>
        <p><strong>Email:</strong> {persona.email}</p>
        <p className="detalle-mensaje">{mensaje}</p>
      </div>
    </div>
  );
};

export default DetallePersona;
