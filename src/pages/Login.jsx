import React from 'react'

const Login = () => {
  return (
    <div className="contenedor__form">
      <form action="">
        <h1 className='title__form'>Bienvenido</h1>
        <input type="text" name="usuario" id="user" placeholder='Usuario' />
        <input type="password" name="password" id="pass" placeholder='Contraseña' />
        <button className='button' type="submit">Ingresar</button>
        <div className="text__form">
          <p>¿Perdiste tu contraseña?</p>
          <p>¿No tienes Cuenta? <a href="#">Registrarse</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login