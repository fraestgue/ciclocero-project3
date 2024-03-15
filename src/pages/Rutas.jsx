import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import service from '../service/config.service'

function Rutas() {


  const [rutas, setRutas] = useState(null)

  const navigate = useNavigate()
  
  useEffect(() => {
    getRutas()
  }, [])


  const getRutas = async () => {

    try {

      const response = await service.get("/rutas")
      console.log(response.data)
      setRutas(response.data)
      
    } catch (error) {
      navigate("/error500")
    }
  }

  if (rutas === null) {
    return <h3>...buscando</h3>
  }

  const handleBack = () => navigate(-1)


  return (
    <div className='rutas'>
      <button onClick={handleBack}>atrás</button>
      {rutas.map((eachRuta) => {
        return (
          <Link to={`/rutas/${eachRuta._id}`} key={eachRuta._id}>
          <div>
            <h3>{eachRuta.name}</h3>
            <img src={eachRuta.image} alt="imagen ruta" width={"150px"} />
            <h4>Dificultad: {eachRuta.difficulty}</h4>
            <h4>Modalidad: {eachRuta.modalidad}</h4>
            <p>Provincia: {eachRuta.provincia}</p>
            <p>Km: {eachRuta.distanciaEnKm}</p>
          </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Rutas