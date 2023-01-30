import React from 'react'

const Registro = () => {
  return (
    <div className="contenedor__form ">
      <form action='' id='formRegistro'>

        <h1 className='title__form'>Crea tu cuenta gratis</h1>

        <div className="row__form">
          <input type="text" name="usuario" id="usuario" placeholder='Nombre' />
          <input type="text" name="apellido" id="apellido" placeholder='Apellido' />
        </div>

        <input type="email" name="email" id="email" placeholder='Ingrese tu correo electrónico' />

        <input type="password" name="password1" id="password1" placeholder='Ingrese una contraseña' />
        <input type="password" name="password2" id="password2" placeholder='Repita la contraseña' />

        <button className='button' type="submit">Ingresar</button>

      </form>
    </div>
  )
}

export default Registro