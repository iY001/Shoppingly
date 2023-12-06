import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Aboutus from './Pages/Aboutus'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
    </Routes>
    </>
  )
}

export default App