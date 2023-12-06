import React from 'react'
import ProductCard from './ProductCard'
import { FaFire } from "react-icons/fa6";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function TopSelling() {
  return (
    <>
    
    <div className='md:contaienr w-full mt-28 bg-[#E8F9FD] md:px-12 flex-nowrap p-12'>
        <div className='flex align-middle'>
          <FaFire className='text-3xl font-semibold mx-2' color='#f43a09' /><p className='text-[#f43a09] text-3xl font-semibold flex '>Top Selling</p>
        </div>
        <section className='flex w-full justify-center md:flex-nowrap flex-wrap md:justify-center md:items-center'>
        <FaRegArrowAltCircleLeft className='hidden md:block text-3xl font-semibold mx-2 cursor-pointer' width={"180px"} color='#f43a09' />
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        <FaRegArrowAltCircleRight className='hidden md:block text-3xl font-semibold mx-2 cursor-pointer' width={"180px"} color='#f43a09' />
        </section>
        <section className='flex justify-end md:mx-12'>
          <Link to={'/products'}  className='hover:text-[#f43a09] cursor-pointer font-medium'>See More</Link>
        </section>
    </div>

    </>
  )
}

export default TopSelling