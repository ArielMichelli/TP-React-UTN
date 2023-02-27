import React, { useState } from 'react'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../Config/firebase';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logueado, setlogueado] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      setlogueado(true);
      alert("Usuario Logeado Correctamente");
    } catch (error) {
      console.log("Error al loguear, Email/Password invalidos")
    }
  }

  return (
    <>
      <div className="contenedor__form">

        <form >
          <h1 className='title__form'>Bienvenido</h1>
          <input required type="email" name="email" id="email" onChange={(ev) => setEmail(ev.target.value)} placeholder='Correo Electronico' />
          <input required type="password" name="password" id="password" onChange={(ev) => setPassword(ev.target.value)} placeholder='Contraseña' />

          <button className='button' onClick={handleLogin}>Ingresar</button>

          <div className="text__form">
            <p>¿Perdiste tu contraseña? <a href="#">Recuperar</a></p>
            <p>¿No tienes Cuenta? <a href="#">Registrarse</a></p>
          </div>

        </form>

      </div>
    </>
  )
}

export default Login;