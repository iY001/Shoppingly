import React from 'react'
import './css/Sign up - CSS.css'
function SignUp() {
  return (
    <>
      <div className='layout-signup'>
        <div className="box-signup">
          <div className="container-s">
            <h2 style={{ marginTop: 10 }}>Sign Up</h2>
            <div className="inputbox">
              <input type="email" required="required" />
              <span>Username</span>
              <line />
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
            <div className="links">
              <a href="/signin">Sign in</a>
              {/* TO REGISTER PAGE */}
            </div>
            <input onclick="window.location.href = 'Sign in - Page.html' " type="submit" defaultValue="Login" style={{ marginTop: 30 }} />
          </div>
        </div>

      </div>
    </>
  )
}

export default SignUp