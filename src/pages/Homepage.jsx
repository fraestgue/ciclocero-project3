import React, { useContext, useState } from 'react'
import Signup from '../components/auth/Signup'
import Login from '../components/auth/Login'
import TextoSinLogin from '../components/TextoSinLogin'
import { AuthContext } from '../context/auth.context'
import { Link } from 'react-router-dom'
import MapContainer from '../components/mapa1/MapContainer'
import globalStyle from "../globalStyle.module.css"



function Homepage() {

  

  return (
    <div className="homepage">
      <Link to={"/rutas"}>
      <button>Ver todas las rutas</button>
      </Link>

      <div className={globalStyle.mapContainerWrapper}>

      <MapContainer />
      </div>

      
    </div>
  )
}

export default Homepage