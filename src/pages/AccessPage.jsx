import React, { useContext, useState } from 'react'
import Signup from '../components/auth/Signup'
import Login from '../components/auth/Login'
import TextoSinLogin from '../components/TextoSinLogin'
import { AuthContext } from '../context/auth.context'


function AccessPage() {

  const [cualFormSeVe, setCualFormSeVe] = useState(null)
  
  const handleFormSignUp = () => {
   setCualFormSeVe("signup")
  }
  const handleFormLogin = () => {
    setCualFormSeVe("login")
   }

  return (
    <div className='homepage'>
      <TextoSinLogin />
      <button onClick={handleFormSignUp} type='button'>Regístrate</button>
      <button onClick={handleFormLogin} type='button'>Accede</button>

      {cualFormSeVe === "signup"? <Signup setCualFormSeVe={setCualFormSeVe}/> : null}
      {cualFormSeVe === "login" ? <Login /> : null}
      
    </div>
  )
}

export default AccessPage