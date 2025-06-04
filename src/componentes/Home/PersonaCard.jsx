import { useNavigate } from "react-router-dom";
import "./PersonaCard.css";

const PersonaCard = ({ persona }) => {
  const navigate = useNavigate();
  return (
    <div className="persona-card">
      <h3 className="persona-nombre">{persona.nombre} {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <button onClick={() => navigate(`/persona/${persona.id}`)} className="persona-boton" > Ver más  </button>
    </div>
  );
};

export default PersonaCard;
