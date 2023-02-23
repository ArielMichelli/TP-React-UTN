import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Services/Firebase';


const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registro, setRegistro] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ mode: "onChange" });
  // const onSubmit = async (data) => {
  //   console.log(data)
  //   try {
  //     const responseUser = Firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
  //     console.log(responseUser);
  //   } catch (e) {
  //     console.log(e)

  //   }
  // }
  const handleSubmit = async (data) => {
    data.preventDefault()
    const correo = data.target.email.value;
    const contraseña = data.target.password.value;
    console.log("correo", correo);
    console.log("password", contraseña)
    try {
      const responseUser = await app.auth().createUserWithEmailAndPassword(correo, password)
      console.log(responseUser)
    } catch (e) {
      console.log(e)

    }
    // if(registro){
    //   await createUserWithEmailAndPassword(auth,correo,contraseña)
    // }else{
    //   await signInWithEmailAndPassword(auth,correo,contraseña)
    // }
  }

  return (
    <div className="contenedor__form ">
      <form onSubmit={handleSubmit} >

        <h1 className='title__form'>Crea tu cuenta gratis</h1>

        <input type="text" id="usuario" placeholder='Nombre' />

        <input type="email" id="email"
          placeholder='Ingrese tu correo electrónico'
        />

        <input type="password" id="password"
          placeholder='Ingrese una contraseña'
        />

        <button className='button' type="submit" >Registrar</button>
      </form>
    </div>
  )
}

export default Registro;