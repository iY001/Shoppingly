import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import errorImg from '../images/404 error with a tired person-bro.png'
import { Link } from 'react-router-dom';
function Error404() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className='h-screen w-full bg-gray-200'>
    <Navbar open={open} setOpen={setOpen} />
        <div className='w-full min-h-screen bg-gray-200 flex justify-center items-start text-center px-10 py-12'>
            <section className='flex flex-col items-center text-center justify-center'>
            <h1 className='text-9xl text-orange-400 font-bold font-[Poppins] mx-12'> 404</h1>
            <h1 className='text-2xl text-orange-400 font-bold font-[Poppins] mx-12 my-4'> Page Not Found</h1>
            <h1 className='text-2xl text-gray-400 font-base font-[Poppins] mx-12'> The Page you're looking for does not seem to exist</h1>

            <Link to={'/'} className='text-white font-bold font-[Poppins] mx-12 my-4 py-2 px-6 bg-orange-400 '>Back to Home</Link>
            </section>
        </div>
    <Footer/>
    </div>
    </>
  )
}

export default Error404