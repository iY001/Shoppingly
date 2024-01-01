import React, { useEffect, useState } from 'react'
import ProductCard from './productsComponents/ProductCard'
import { FaFire } from "react-icons/fa6";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function TopSelling({products}) {
  const [width, setWidth] = useState('');

  useEffect(() => {
    setWidth('md:w-[240px] w-[140px]');
  }, []);

  const [ showModal , setShowModal ] = useState(false)
  const ModalHandler = ()=>{
    setShowModal(!showModal)
    setTimeout(() => {
      setShowModal(false);
    }, 1500); // Hide after 1.5 seconds
  }
  return (
    <>

      <div className='md:contaienr w-full mt-28 bg-[#E8F9FD] md:px-12 flex-nowrap p-12 mb-24'>
        <div className='flex h-full align-middle'>
          <FaFire className='text-3xl font-semibold mx-2' color='#f43a09' /><p className='text-[#f43a09] text-3xl font-semibold flex '>Top Selling</p>
        </div>
        <section className='flex w-full h-full justify-center md:flex-nowrap flex-wrap'>
          {/* <FaRegArrowAltCircleLeft className='hidden md:block text-3xl font-semibold mx-2 cursor-pointer' width={"180px"} color='#f43a09' /> */}
          {products.slice(0, 5).map((item) => (
            <ProductCard key={item.id} width={width} prod={item} ModalHandler={ModalHandler}/>
          ))}
          {/* <FaRegArrowAltCircleRight className='hidden md:block text-3xl font-semibold mx-2 cursor-pointer' width={"180px"} color='#f43a09' /> */}
        </section>
        <section className='flex justify-end md:mx-12'>
          <Link to={'/products'} className='hover:text-[#f43a09] cursor-pointer font-medium'>See More</Link>
        </section>
      </div>

    </>
  )
}

export default TopSelling