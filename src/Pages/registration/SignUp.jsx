import React from 'react'
import './css/Sign up - CSS.css'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

function SignUp() {
  return (
    <>
      <div className='layout-signup md:w-full md:px-0 px-6'>
        <div className="box-signup">
          <div className="container-s">
            <div className=''>
              <Link to="/" className={`z-30 absolute md:left-10 mt-3 text-xl text-[#817D81] md:hover:text-[#f43c09a7] duration-300 w-8 cursor-pointer `}>
                <IoMdArrowRoundBack />
              </Link>
              <h2 style={{ marginTop: 10 }}>Sign Up</h2>
            </div>
            <div className="inputbox">
              <input type="email" required="required" />
              <span>Username</span>
              <section className='line'></section>
            </div>
            <div className="inputbox">
              <input type="email" required="required" />
              <span>Email</span>
              <section className='line'></section>
            </div>
            <div className="inputbox">
              <input type="password" required="required" />
              <span>Password</span>
              <section className='line'></section>
            </div>
            <div className="links">
              <a href="/signin">Sign in</a> {/* TO LOGIN PAGE */}
            </div>
            <input type="submit" defaultValue="Login" style={{ marginTop: 30 }} />
          </div>
        </div>

      </div>
    </>
  )
}

export default SignUp