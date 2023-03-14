import { useState } from "react";
import firebase from "../Config/firebase";
import { Link } from "react-router-dom";

const Registro = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let nombre = form.nombre;
    let apellido = form.apellido;
    let email = form.email;
    let password = form.password;

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(`Usuario creado correctamente...`);
      console.log(
        `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${email}\nPassword: ${password}`
      );
      alert("Cuenta creada con Exito!!!");
    } catch (error) {
      console.log(`Error al crear Usuario \n ${error}`);
      alert("Error al crear la cuenta...");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="contenedor__form ">
      <form onSubmit={handleSubmit}>
        <h1 className="title__form">Crea tu cuenta gratis</h1>

        <div className="nombre_apellido">
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <input
            type="text"
            name="apellido"
            id="apellido"
            value={form.apellido}
            onChange={handleChange}
            placeholder="Apellido"
          />
        </div>

        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Ingrese tu correo electrónico"
        />

        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Ingrese una contraseña"
        />

        <button className="button" type="submit">
          Registrar
        </button>

        <div className="text__form">
          <p>
            ¿Ya tenes Cuenta?
            <Link as={Link} to="/login">
              Ingresar
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registro;
