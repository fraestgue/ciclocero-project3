import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../service/config.service'

function DetallesRuta() {

  const [detallesRuta, setDetallesRuta] = useState(null)

  const navigate = useNavigate()
  const params = useParams()
  // console.log(params)


  useEffect(() => {
    getDetails()
  }, [params.rutaId])

  const getDetails = async () => {
    try {

      const response = await service.get(`/rutas/${params.rutaId}`)
      console.log(response.data)
      setDetallesRuta(response.data)
      
    } catch (error) {
      navigate("/error500")
    }
  }

  if (detallesRuta === null) {
    return <h3>...buscando</h3>
  }

  const handleBack = () => navigate(-1)





  return (
    <div className='detalles-ruta'>
      <button onClick={handleBack}>atrás</button>

      <h2>{detallesRuta.name}</h2>
      <img src={detallesRuta.image} alt={detallesRuta.name} width={"300px"} />
      <div>
        {detallesRuta.comunidad} | {detallesRuta.provincia}
      </div>
      <div>
         {detallesRuta.distanciaEnKm}km | {detallesRuta.desnivelEnM}m | {detallesRuta.duracionEnHoras}h 
      </div>
      <div>
        {detallesRuta.difficulty} | {detallesRuta.modalidad} | {detallesRuta.circular === true ? "Circular" : "No circular"} 
      </div>

     

      </div>
  )
}

export default DetallesRuta