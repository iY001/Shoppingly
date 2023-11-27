import React from 'react'
import ProductCard from './ProductCard'
import { FaFire } from "react-icons/fa6";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function TopSelling() {
  return (
    <>
    
    <div className='md:contaienr md:w-full w-full mt-28 bg-[#E8F9FD] md:px-12 flex-nowrap justify-center p-12'>
        <div className='flex align-middle'>
          <FaFire className='text-3xl font-semibold mx-2' color='#f43a09' /><p className='text-[#f43a09] text-3xl font-semibold flex '>Top Selling</p>
        </div>
        <section className='flex md:flex-nowrap flex-wrap md:justify-center md:items-center'>
        <FaRegArrowAltCircleLeft className='hidden md:block text-3xl font-semibold mx-2 cursor-pointer' width={"180px"} color='#f43a09' />
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        <FaRegArrowAltCircleRight className='hidden md:block text-3xl font-semibold mx-2 cursor-pointer' width={"180px"} color='#f43a09' />
        </section>
        <section className='flex justify-end md:mx-12'>
          <p className='hover:text-[#f43a09] cursor-pointer font-medium'>See More</p>
        </section>
    </div>

    </>
  )
}

export default TopSelling