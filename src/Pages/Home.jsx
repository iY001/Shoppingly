import React from 'react'
import Navbar from '../Components/Navbar'
import Sales from '../Components/Sales'
import TopSelling from '../Components/TopSelling'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Sales/>
    <TopSelling/>
    <Footer/>
    </>
  )
}

export default Home