import React from 'react'

function ProductModal({showModal}) {
  return (
    <>
    <div
      className={`fixed md:text-center z-50 md:top-14 top-12 right-0 mt-8 md:mr-8 md:h-20 bg-white border rounded-xl md:rounded-r-xl rounded-t-none rounded-r-none border-gray-300 transition-opacity ${
        showModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className='h-2 bg-[#f43c09a7] w-full'></div>
      <p className='text-green-600 md:p-3 py-2 px-3 uppercase font-semibold'>Product added to cart successfully!</p>
    </div>
    </>
  )
}

export default ProductModal