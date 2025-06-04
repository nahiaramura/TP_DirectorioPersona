import personas from "../../assets/people.json";
import PersonaCard from "./PersonaCard";

const Home = () => (
  <div>
    <h2>Lista de Personas</h2>
    {personas.map((p) => (<PersonaCard key={p.id} persona={p} /> ))}
  </div>
);

export default Home;
