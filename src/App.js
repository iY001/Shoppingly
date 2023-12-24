import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Aboutus from './Pages/Aboutus'
import ProductDetails from './Components/productsComponents/ProductDetails'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/products/product-details/:id' element={<ProductDetails/>}></Route>
    </Routes>
    </>
  )
}

export default App