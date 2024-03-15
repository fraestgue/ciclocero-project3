import React, { useState } from 'react'
import Signup from '../components/auth/Signup'
import Login from '../components/auth/Login'
import TextoSinLogin from '../components/TextoSinLogin'


function Homepage() {

  const [signupShowing, setSignupShowing] = useState(false)
  const [loginShowing, setLoginShowing] = useState(false)

  const handleToggleSignup = () => {
    setSignupShowing(!signupShowing)
    if (signupShowing === true) {
      setLoginShowing(false)
    }
  } 
  const handleToggleLogin = () => {
    setLoginShowing(!loginShowing)
    if (loginShowing === true) {
      setSignupShowing(false) 
    }
  } 
  




  return (
    <div className='homepage'>
      <TextoSinLogin />
      <button onClick={handleToggleSignup} type='button'>Regístrate</button>
      <button onClick={handleToggleLogin} type='button'>Accede</button>

      {signupShowing === true ? <Signup /> : null}
      {loginShowing === true ? <Login /> : null}


      
      
      
    </div>
  )
}

export default Homepage