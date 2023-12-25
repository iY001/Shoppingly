import React from 'react'
import './css/Sign in - CSS.css'

function SignIn() {
    return (
        <>
        <div className='layout-signin'>

            <div className="box">
                <div className="container-s">
                    <h2 style={{ marginTop: 10 }}>Sign in</h2>
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
                    <div className="links">
                        <a href="#">Forget Password</a>
                        <a href="/signup">Sign Up</a>
                        {/* TO REGISTER PAGE */}
                    </div>
                    <input onclick="window.location.href= '/sign' " type="submit" defaultValue="Login" style={{ marginTop: 30 }} />
                </div>
            </div>
        </div>

        </>
    )
}

export default SignIn