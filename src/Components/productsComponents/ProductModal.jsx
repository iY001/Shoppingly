import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
function ProductModal({showModal}) {
  return (
    <>
    <div
      className={`fixed flex z-50 md:top-14 top-12 mt-8 md:mr-8 md:h-20 bg-white border border-gray-300 duration-700 transition-all ${
        showModal ? 'pointer-events-auto right-0' : ' pointer-events-none right-[-600px]'
      }`}
    >
      <div className='w-[30%] flex justify-center text-center items-center border-r-2 border-gray-200'>
      <FaCircleCheck className='text-green-600 md:text-3xl text-2xl' />
      </div>
      <p className=' md:text-lg text-xs uppercase py-3 px-2'>Product added to cart successfully!</p>
    </div>
    </>
  )
}

export default ProductModal