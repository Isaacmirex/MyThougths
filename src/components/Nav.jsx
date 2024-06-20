/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import appFirebase from '../credentials.js'
import { getAuth, signOut } from "firebase/auth";
import ImgLogo from '../assets/logo/logo_transparent.png'
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'
const auth = getAuth(appFirebase)
 const Nav =()=>  {
//   const [click,setClick]=React.useState(false)
//   const handleClick = () => setClick(!click)

// const content = <>
//     <div >
//     <ul className="flex gap-8 mr-16 text-[18px]">
//               <Link spy={true} smooth={true} to="Home">
//                 <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">Home</li>
//               </Link>
//               <Link spy={true} smooth={true} to="MyCalendar">
//                 <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyCalendario</li>
//               </Link>
//               <Link spy={true} smooth={true} to="MyDiet">
//                 <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyDieta</li>
//               </Link>
//               <Link spy={true} smooth={true} to="MyDreams">
//                 <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MySueño</li>
//               </Link>
//               <Link spy={true} smooth={true} to="MyMestrualCalendar">
//                 <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyCalendarioMestrual</li>
//               </Link>
//               <Link spy={true} smooth={true} to="MyPhysicalActivity">
//                 <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyActividadFísica</li>
//               </Link>
//               <Link spy={true} smooth={true} to="MyPysicologyTest">
//                 <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyTestPsicológico</li>
//               </Link>
//               <Link spy={true} smooth={true} to="About">
//                 <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">Info</li>
//               </Link>
//               <Link  spy={true} smooth={true} to="Login" onClick={() => signOut(auth)}>
//                 <li className="hover:text-red-600 trasnition border-b-2 border-slate-900 hover:border-red-600 cursor-pointer">Salir</li>
//               </Link>
//             </ul>
//     </div>
// </>
    return (
        <div>
      <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">
          <Link to="/login" className="text-3xl font-bold"> 
            <img src={ImgLogo} alt="" className="style-logo" />
            </Link>
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <NavLink  exact={true} to="/home">
                <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyPensamientos</li>
              </NavLink>
              <NavLink  exact={true} to="/mycalendar">
                <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyCalendario</li>
              </NavLink>
              <NavLink  exact={true} to="mydiet">
                <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyDieta</li>
              </NavLink>
              <NavLink exact={true} to="MyDreams">
                <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MySueño</li>
              </NavLink>
              <NavLink exact={true}  to="MyMestrualCalendar">
                <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyCalendarioMenstrual</li>
              </NavLink>
              <NavLink  exact={true} to="MyPhysicalActivity">
                <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyActividadFísica</li>
              </NavLink>
              <NavLink exact={true}  to="MyPysicologyTest">
                <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">MyTestPsicológico</li>
              </NavLink>
              <NavLink exact={true}  to="About">
                <li className="hover:text-cyan-400 trasnition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer">Info</li>
              </NavLink>
              <NavLink  exact={true}  to="Login" onClick={() => signOut(auth)}>
                <li className="hover:text-red-600 trasnition border-b-2 border-slate-900 hover:border-red-600 cursor-pointer">Salir</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div>
          {/* {click && content} */}
        </div>
        {/* <button className='block sm:hidden transtion' onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/> }
        </button> */}
      </div>
    </nav>


    </div>
    )
  
}

export default Nav