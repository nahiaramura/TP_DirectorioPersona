import { useParams } from "react-router-dom";
import personas from "../../data/personas";

const DetallePersona = () => {
  const { id } = useParams();
  const persona = personas.find((p) => p.id === parseInt(id));

  if (!persona) {
    return <h2>Persona no encontrada 😕</h2>;
  }

  const mensaje = persona.edad >= 18 ? "Mayor de edad" : "Menor de edad";

  return (
    <div>
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
      <p><strong>{mensaje}</strong></p>
    </div>
  );
};

export default DetallePersona;
