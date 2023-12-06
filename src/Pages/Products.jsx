import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { IoIosSearch } from "react-icons/io";

function Products() {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState([
    {
    page : "Home",
    url : "/"
  },{
    page : "Products",
    url : "/products"
  },{
    page : "About us",
    url : "/aboutus"
  }]);
  return (
    <>
      <div className="relative z-10 md:bg-white bg-[#F4F4F4]">
        <div className="container mx-auto flex justify-between items-center align-middle py-3 bg-[#F4F4F4] md:bg-white ">
          <div className="cursor-pointer mx-[-65px] md:mx-[-40px] mt-[-6px] md:mt-[-2px] py-2">
            <h2 className="flex items-end font-normal text-[2rem] mx-[2.5em]">
              Shopping
              <p className="text-[#F43A09] text-[1.8rem]">.ly</p>
            </h2>
          </div>
          <nav>
            <span class="bg-[#F4F4F4] md:bg-white text-[#F43A09] duration-500 text-3xl cursor-pointer mx-6 align-middle md:hidden block">
              <ion-icon
                onClick={() => setOpen(!open)}
                name={open ? "close" : "menu"}
              ></ion-icon>
            </span>
            <ul
              className={`flex flex-col md:flex-row bg-[#F4F4F4] md:bg-white items-center text-[1.1rem] gap-[2em] md:flex md:items-center md:px-4 z-[-20] md:z-auto absolute md:static 
         w-full md:w-auto left-0 py-6 md:py-0 pl-7 md:pl-0 opacity-0 md:opacity-100
        top-[-400px] transition-all ease-in duration-500 ${open ? "top-[60px] opacity-100" : "top-[-80px] opacity-0"
                } `}
            >
              {links.map((link) => {
                return (
                  <li key={link}>
                    <a
                      className="text-black font-medium hover:opacity-[0.7] hover:text-[#F43A09]"
                      href={`${link.url}`}
                    >
                      {link.page}
                    </a>
                  </li>
                );
              })}
              <button className="md:bg-[#f0f0f0] md:px-[1.2rem] md:py-2 md:rounded-3xl hover:text-[#F43A09] font-medium  md:transition-all">
                Sign Up
              </button>
              <button className="md:bg-[#f0f0f0] md:px-[1.2rem] md:py-2 md:rounded-3xl hover:text-[#F43A09] font-medium  md:transition-all">
                Sign In
              </button>
              {!open && (
                <button className="bg-white w-100 md:bg-[#F43A09] md:text-white md:text-2xl md:px-[0.4rem] md:py-[0.2rem] md:rounded-xl md:transition-all">
                  <ion-icon name="cart-outline"></ion-icon>
                </button>
              )}
            </ul>
          </nav>
          {/* Navbar */}
        </div>
        {/* Container */}
      </div>

      {/* Navbar */}

    <div className={`w-full mt-6 relative ${open ? "z-0" : 'z-20' }`}>
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


    </div>





    </>
  )
}

export default Products