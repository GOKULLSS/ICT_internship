import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/><br /><br /><br />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/state' element={<StateBasics/>}/>


      </Routes>
      
    </>
  )
}

export default App
