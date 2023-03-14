import React, { useState } from "react";
import firebase from "../Config/firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logueado, setlogueado] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setlogueado(true);
      console.log(`Usuario Logeado Correctamente`);
      alert("Usuario Logeado Correctamente");
    } catch (error) {
      console.log(`Error al loguear, Email/Password invalidos \n${error}`);
    }
  };
  const handleRecuperar = () => {
    alert("Recuperacion de cuentas proximamente implementada...");
  };

  return (
    <>
      <div className="contenedor__form">
        <form>
          <h1 className="title__form">Bienvenido</h1>
          <input
            required
            type="email"
            name="email"
            id="email"
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Correo Electronico"
          />
          <input
            required
            type="password"
            name="password"
            id="password"
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Contraseña"
          />

          <button className="button" onClick={handleLogin}>
            Ingresar
          </button>

          <div className="text__form">
            <p>
              ¿Perdiste tu contraseña?{" "}
              <a href="#" onClick={handleRecuperar}>
                Recuperar
              </a>
            </p>
            <p>
              ¿No tienes Cuenta?{" "}
              <Link as={Link} to="/registro">
                Registrarse
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
