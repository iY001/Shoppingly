import React from 'react'
import 
function SignIn() {
    return (
        <>
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
                        <a href="Sign up - Page.html">Sign Up</a>
                        {/* TO REGISTER PAGE */}
                    </div>
                    <input onclick="window.location.href= '../index.html' " type="submit" defaultValue="Login" style={{ marginTop: 30 }} />
                </div>
            </div>

        </>
    )
}

export default SignIn