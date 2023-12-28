import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/aboutusComponents/Content'
import Footer from '../Components/Footer'

function Aboutus() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Navbar open={open} setOpen={setOpen} />
    <Content/>
    <Footer/>
    </>
  )
}

export default Aboutus