import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import Update from './components/Update'


function App() {

   return (
    <>
      <Nav/><br /><br />
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
      
    </>
  )
}

export default App
