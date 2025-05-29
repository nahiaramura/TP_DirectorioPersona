import personas from "../../data/personas";
import PersonaCard from "./PersonaCard";

const Home = () => (
  <div>
    <h2>Lista de Personas</h2>
    {personas.map((p) => (
      <PersonaCard key={p.id} persona={p} />
    ))}
  </div>
);

export default Home;
