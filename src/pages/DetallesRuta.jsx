import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../service/config.service'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ClickMarker from '../components/ClickMarker'

function DetallesRuta() {

  const [detallesRuta, setDetallesRuta] = useState(null)
  const [center, setCenter] = useState([40.034906, -4.121625])
  const [clickedPosition, setClickedPosition] = useState(null)

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
      // setCenter(response.data.coordinates)
      
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

      <MapContainer center={center} zoom={5} scrollWheelZoom={true}>
        <TileLayer  
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <ClickMarker setClickedPosition={setClickedPosition} />
        { clickedPosition !== null && <Marker position={clickedPosition} /> }

        

      </MapContainer>
     

      </div>
  )
}

export default DetallesRuta