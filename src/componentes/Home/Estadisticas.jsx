import personas from "../../data/personas";

const edades = personas.map(p => p.edad);
const total = personas.length;
const mayores35 = personas.filter(p => p.edad > 35).length;
const maxEdad = Math.max(...edades);
const minEdad = Math.min(...edades);
const promedio = (edades.reduce((a, b) => a + b, 0) / total).toFixed(1);

const Estadisticas = () => {
  const mayores = personas.filter(p => p.edad === maxEdad);
  const menores = personas.filter(p => p.edad === minEdad);

  return (
    <div>
      <h2>Estadísticas</h2>
      <p>Total de personas: {total}</p>
      <p>Mayores de 35: {mayores35}</p>
      <p>Promedio de edad: {promedio}</p>
      <p>Mayor edad: {maxEdad} - {mayores.map(p => `${p.nombre} ${p.apellido}`).join(", ")}</p>
      <p>Menor edad: {minEdad} - {menores.map(p => `${p.nombre} ${p.apellido}`).join(", ")}</p>
    </div>
  );
};

export default Estadisticas;
