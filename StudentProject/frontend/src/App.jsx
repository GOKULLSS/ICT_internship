import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'


function App() {
  const [count, setCount] = useState(0)

   return (
    <>
      <Nav/><br /><br />
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>


      </Routes>
      
    </>
  )
}

export default App
