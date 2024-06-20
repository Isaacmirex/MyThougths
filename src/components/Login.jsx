/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ImgProfile from '../assets/profile.jpg'
import ImgLogin from '../assets/login_assert_1.jpg'
import ImgLogo from '../assets/logo/logo_solo.png'
import appFirebase from '../credentials.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase)

const Login = () => {
  const [register, setRegister] = useState(false)

  const fuctAutentication = async(e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value;
    if(register){
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        alert("Ya se registro este usuario: "+error)
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        alert("El usuario o contraseña es incorrecto: "+error)
      }
    }
  }

  return (
    <div>
      <div className="title-container">
        <h1>MY THOUGHTS 1.0 </h1>
        
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <div className="father">
              <div className="card card-body shadow-lg">
                <img src={ImgLogo} alt="" className='style-profile' />
                <form onSubmit={fuctAutentication}>
                  <input type="text" placeholder='Ingresar Email' className='text-box' id='email' />
                  <input type="password" placeholder='Ingresar Password' className='text-box' id='password' />
                  <button className='btnform'>{register ? "Registrate" : "Inicia Sesion"}</button>
                </form>
                <h4 className='text'>{register ? "Accede si ya te resgistraste" : "¿No tienes cuenta?"}<button onClick={() => setRegister(!register)} className='btnswitch'>{register ? "Inicia sesion" : "Registrate "}</button></h4>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <img src={ImgLogin} alt="" className='size-img' />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Desarrollado por Isaac Romero (CatDev)- 2024</p>
      </div>
    </div>
  )
}

export default Login