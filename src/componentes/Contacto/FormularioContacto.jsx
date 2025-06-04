import { useState } from "react";
import { validarEmail } from "./validaciones";

const FormularioContacto = () => {
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", edad: "" });
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = {};
    if (!form.nombre) errs.nombre = "Campo obligatorio";
    if (!form.apellido) errs.apellido = "Campo obligatorio";
    if (!form.email) errs.email = "Campo obligatorio";
    else if (!validarEmail(form.email)) errs.email = "Email inválido";
    if (!form.edad || isNaN(form.edad) || form.edad <= 0) errs.edad = "Edad inválida";

    setErrores(errs);

    if (Object.keys(errs).length === 0) {
      setMensaje("Formulario enviado correctamente");
      setForm({ nombre: "", apellido: "", email: "", edad: "" });
    } else {
      setMensaje("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <h2 style={{ textAlign: "center" }}>Contacto</h2>
      {["nombre", "apellido", "email", "edad"].map((campo) => (
        <div key={campo} style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
            {campo.charAt(0).toUpperCase() + campo.slice(1)}:
          </label>
          <input
            name={campo}
            value={form[campo]}
            onChange={handleChange}
            placeholder={`Ingrese su ${campo}`}
            />
          {errores[campo] && (
            <span style={{ color: "red", fontSize: "0.875rem" }}>{errores[campo]}</span>
          )}
        </div>
      ))}

      <button> Enviar</button>

      {mensaje && ( <p style={{ color: "green", textAlign: "center", fontWeight: "bold" }}>{mensaje}</p>)}
    </form>
  );
};

export default FormularioContacto;
