import React from 'react'
import './css/Sign in - CSS.css'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

function SignIn() {
    return (
        <>
            <div className='layout-signin md:w-full md:px-0 px-6'>

                <div className="box">
                    <div className="container-s">
                        <div className=''>
                            <Link to="/"  className={`z-30 absolute md:left-10 mt-3 text-xl text-[#817D81] md:hover:text-[#f43c09a7] duration-300 w-8 cursor-pointer `}>
                                <IoMdArrowRoundBack />
                            </Link>
                            <h2 style={{ marginTop: 10 }}>Sign in</h2>
                        </div>
                        <div className="inputbox">
                            <input type="email" required="required" />
                            <span>Email</span>
                            <line />
                        </div>
                        <div className="inputbox">
                            <input type="password" required="required" />
                            <span>Password</span>
                            <line />
                        </div>
                        <div className="links flex flex-col">
                            <a href="#">Forget Password</a>
                            <a href="/signup" className='text-[#817D81]'>Sign Up</a> {/* TO REGISTER PAGE */}
                        </div>
                        <input onclick="window.location.href= '/sign' " type="submit" defaultValue="Login" style={{ marginTop: 5 }} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn