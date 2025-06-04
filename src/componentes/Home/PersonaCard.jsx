import { useNavigate } from "react-router-dom";

const PersonaCard = ({ persona }) => {
  const navigate = useNavigate();
  return (
    <div style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)"
      }}>
        <h3 style={{ marginBottom: "0.5rem" }}>{persona.nombre} {persona.apellido}</h3>
        <p>Edad: {persona.edad}</p>
        <button
          onClick={() => navigate(`/persona/${persona.id}`)}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Ver más
        </button>
      </div>
      
  );
};

export default PersonaCard;
