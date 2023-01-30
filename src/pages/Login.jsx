import React from 'react'

const Login = () => {
  return (
    <form action="">
      <div className="row__form">
      <label htmlFor="">Ingrese Usuario:</label>
      <input type="text" name="usuario" id="user"/>
      </div>
      <div className="row__form">
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="pass" />
      </div>
      <button className='button' type="submit">Ingresar</button>
    </form>
  )
}

export default Login