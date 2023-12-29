import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Aboutus from './Pages/Aboutus'
import ProductDetails from './Components/productsComponents/ProductDetails'
import SignIn from './Pages/registration/SignIn'
import SignUp from './Pages/registration/SignUp'
import CartContextProvidor from './Context/CartContext'


function App() {
  return (
    <>
      <CartContextProvidor>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/aboutus' element={<Aboutus />}></Route>
          <Route path='/products/product-details/:id' element={<ProductDetails />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
      </CartContextProvidor>
    </>
  )
}

export default App