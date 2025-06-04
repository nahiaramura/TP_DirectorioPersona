import "./Estadisticas.css";
import personas from "../../assets/people.json";

const edades = personas.map(p => p.edad);
const total = personas.length;

let suma = 0;
for (let i = 0; i < edades.length; i++) {
  suma += edades[i];
}
const promedio = Math.round(suma / total);

const mayores35 = personas.filter(p => p.edad > 35).length;

let maxEdad = edades[0];
let minEdad = edades[0];

for (let i = 1; i < edades.length; i++) {
  if (edades[i] > maxEdad) maxEdad = edades[i];
  if (edades[i] < minEdad) minEdad = edades[i];
}

const mayores = personas.filter(p => p.edad === maxEdad);
const menores = personas.filter(p => p.edad === minEdad);

const Estadisticas = () => {
  return (
    <div className="estadisticas-container">
      <h2 className="estadisticas-titulo">Estadísticas</h2>
      <ul className="estadisticas-lista">
        <li><strong>Total de personas:</strong> {total}</li>
        <li><strong>Mayores de 35:</strong> {mayores35}</li>
        <li><strong>Promedio de edad:</strong> {promedio}</li>
        <li><strong>Mayor edad:</strong> {maxEdad} - {mayores.map(p => p.nombre + " " + p.apellido).join(", ")}</li>
        <li><strong>Menor edad:</strong> {minEdad} - {menores.map(p => p.nombre + " " + p.apellido).join(", ")}</li>
      </ul>
    </div>
  );
};

export default Estadisticas;
