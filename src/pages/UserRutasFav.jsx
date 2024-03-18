import React from 'react'
import btnAtras from "../assets/btn-atras.png"
import { useNavigate } from 'react-router-dom'

function UserRutasFav() {
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)
  return (
    <div>
      <button onClick={handleBack} className="btn-atras">
            <img src={btnAtras} alt="atras" width="25px"/>
          </button>
      <p>Tus rutas favoritas</p></div>
  )
}

export default UserRutasFav