import { useState } from 'react';
import firebase from '../Config/firebase';

const Registro = () => {
  const [form, setForm] = useState({ nombre: '', email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let nombre = form.nombre;
    let email = form.email;
    let password = form.password;

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log(`Usuario creado correctamente...`)
      console.log(`Nombre: ${nombre}\nCorreo: ${email}\nPassword: ${password}`)
    } catch (error) {
      console.log("Error al crear Usuario")
    }

  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value
    })

  }

  return (
    <div className="contenedor__form ">
      <form onSubmit={handleSubmit} >

        <h1 className='title__form'>Crea tu cuenta gratis</h1>

        <input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleChange}
          placeholder='Nombre' />

        <input type="email" name="email" id="email" value={form.email} onChange={handleChange}
          placeholder='Ingrese tu correo electrónico'
        />

        <input type="password" name="password" id="password" value={form.password} onChange={handleChange}
          placeholder='Ingrese una contraseña'
        />

        <button className='button' type="submit" >Registrar</button>
      </form>
    </div>
  )
}

export default Registro;