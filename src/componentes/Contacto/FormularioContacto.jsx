import { useState } from "react";
import "./FormularioContacto.css";

const FormularioContacto = () => {
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", edad: "" });
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const validarEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = e => {
    e.preventDefault();
    const errores = {};

    if (!form.nombre) errores.nombre = "Campo obligatorio";
    if (!form.apellido) errores.apellido = "Campo obligatorio";
    if (!form.email) errores.email = "Campo obligatorio";
    else if (!validarEmail(form.email)) errores.email = "Email inválido";
    if (!form.edad || isNaN(form.edad) || form.edad <= 0) errores.edad = "Edad inválida";

    setErrores(errores);

    if (Object.keys(errores).length === 0) {
      setMensaje("Formulario enviado correctamente");
      setForm({ nombre: "", apellido: "", email: "", edad: "" });
    } else {
      setMensaje("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2 className="formulario-titulo">Contacto</h2>

      <div className="formulario-campo">
        <label className="formulario-label">Nombre:</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Ingrese su nombre"
          className="formulario-input"
        />
        {errores.nombre && <span className="formulario-error">{errores.nombre}</span>}
      </div>

      <div className="formulario-campo">
        <label className="formulario-label">Apellido:</label>
        <input
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          placeholder="Ingrese su apellido"
          className="formulario-input"
        />
        {errores.apellido && <span className="formulario-error">{errores.apellido}</span>}
      </div>

      <div className="formulario-campo">
        <label className="formulario-label">Email:</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Ingrese su email"
          className="formulario-input"
        />
        {errores.email && <span className="formulario-error">{errores.email}</span>}
      </div>

      <div className="formulario-campo">
        <label className="formulario-label">Edad:</label>
        <input
          name="edad"
          value={form.edad}
          onChange={handleChange}
          placeholder="Ingrese su edad"
          className="formulario-input"
        />
        {errores.edad && <span className="formulario-error">{errores.edad}</span>}
      </div>

      <button type="submit" className="formulario-boton">Enviar</button>

      {mensaje && (
        <p className="formulario-mensaje">{mensaje}</p>
      )}
    </form>
  );
};

export default FormularioContacto;
