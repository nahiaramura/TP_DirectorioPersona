import { Link } from "react-router-dom";

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  backgroundColor: "#222",
};


const Navbar = () => (
  <nav style={{
    display: "flex",
    gap: "1rem",
    background: "#111",
    padding: "1rem 2rem",
    justifyContent: "flex-start",
  }}>
    <Link to="/" style={linkStyle}>Inicio</Link>
    <Link to="/estadisticas" style={linkStyle}>Estadísticas</Link>
    <Link to="/contacto" style={linkStyle}>Contacto</Link>
  </nav>
  
);

export default Navbar;
