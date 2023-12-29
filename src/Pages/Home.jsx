import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sales from '../Components/Sales'
import TopSelling from '../Components/TopSelling'
import Footer from '../Components/Footer'
import DataFetching from '../data/DataFetching'

function Home() {
  const [open, setOpen] = useState(false);

  const { products } = DataFetching();
  console.log(products)
  return (
    <>
    <Navbar open={open} setOpen={setOpen} />
    <Sales/>
    <TopSelling products={products}/>
    <Footer/>
    </>
  )
}

export default Home