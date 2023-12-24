import React from 'react'
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <>
    {/* Search Bar - Start */}

    <div className="flex justify-center">
            <div className="flex items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-300 bg-gray-300 p-5">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
              <IoIosSearch className='cursor-pointer text-[#F43A09]'/>
              </svg>
            </div>
            <input type="text" className="w-full max-w-[60%] bg-gray-200 pl-4 text-base font-semibold outline-0" placeholder id />
            <input type="button" defaultValue="Search" className="bg-[#c13c07] cursor-pointer p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#F43A09] transition-colors" />
          </div>
    {/* Search Bar - End */}
    </>
  )
}

export default SearchBar