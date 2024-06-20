/* eslint-disable no-unused-vars */
import { Element } from 'react-scroll';
import { useState } from 'react'
//import mofule from firebase
import appFirebase from '../src/credentials.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase)
//import components
import Login from './components/login.jsx'
import Home from './components/home.jsx'
import About from './components/About.jsx'
import MyPhysicalActivity from './components/MyPhysicalActivity.jsx'
import MyMestrualCalendar from './components/MyMestrualCalendar.jsx'
import MyDiet from './components/MyDiet.jsx'
import MyDreams from './components/MyDreams.jsx';
import MyPysicologyTest from './components/MyPysicologyTest.jsx';
import MyCalendar from './components/MyCalendar.jsx';
import Nav from './components/nav.jsx';
import './App.css'
import  RutesApp from './components/routes.jsx'
import RoutesApp from './components/routes.jsx';
function App() {
 
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase)
    } else {
      setUser(null)
    }
  } )
  // console.log("user",user)
  return (
    
    <div>
     
      {user ? <RoutesApp UserEmail={user.email} /> : <Login />}
      

  </div>
  )
}

export default App
