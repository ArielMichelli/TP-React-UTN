import React, { useState } from 'react'

import Firebase from '../Services/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Services/Firebase';


const auth = getAuth(app);


const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [registro,setRegistro] = useState(false);

  const handleLogin = () => {
    alert(`Hola señor.... ${usuario}.... como esta?`)
    console.log(usuario,password)
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    
    if(registro){
      await createUserWithEmailAndPassword(auth,correo,contraseña)
    }else{
      await signInWithEmailAndPassword(auth,correo,contraseña)
    }
  }
  return (
    <div className="contenedor__form">
      <form onSubmit={handleSubmit}>
        <h1 className='title__form'>Bienvenido</h1>

        <input required type="email" name="email" id="email" onChange={ (ev) => setUsuario(ev.target.value)} placeholder='Correo Electronico' />
        <input required type="password" name="password" id="password" onChange={ (ev) => setPassword(ev.target.value)} placeholder='Contraseña' />

        <button className='button' type="submit">Ingresar</button>

        <div className="text__form">
          <p>¿Perdiste tu contraseña? <a href="#">Recuperar</a></p>
          <p>¿No tienes Cuenta? <a href="#">Registrarse</a></p>
        </div>

      </form>
    </div>
  )
}

export default Login;