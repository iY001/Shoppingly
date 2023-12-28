import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sales from '../Components/Sales'
import TopSelling from '../Components/TopSelling'
import Footer from '../Components/Footer'

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Navbar open={open} setOpen={setOpen} />
    <Sales/>
    <TopSelling/>
    <Footer/>
    </>
  )
}

export default Home