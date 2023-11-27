import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
    </Routes>
    </>
  )
}

export default App