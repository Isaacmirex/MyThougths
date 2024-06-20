/* eslint-disable no-unused-vars */
import React from 'react'
import appFirebase from '../credentials.js'
import { getAuth, signOut } from "firebase/auth";
import Nav from './nav.jsx';


const auth = getAuth(appFirebase)
const home = ({ UserEmail }) => {
  return (
    
    <div className='Home'>
      {/* <div className='bg-slate-900'><Nav/> </div> */}
      <h2>Home</h2>
      {/* <h2>Home</h2> */}
        {/* <h2 className='s'>Bienvenido usuario {UserEmail} <button className='btn btn-primary' onClick={()=>signOut(auth)}>Salir</button></h2>
        <div className="bg-state-900">
          <h2>React APP</h2>
        </div> */}
     
    </div>
    
  )
}

export default home;