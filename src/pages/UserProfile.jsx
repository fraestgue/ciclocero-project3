import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import service from '../service/config.service'
import { Link } from 'react-router-dom'

function UserProfile() {

  const [profile, setProfile] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {

      const response = await service.get("/user")
      console.log(response.data)
      setProfile(response.data)
      
    } catch (error) {
      navigate("/error500")
    }
  }

  if (profile === null) {
    return <h3>...buscando</h3>
  }

  const handleBack = () => navigate(-1)


  return (
    <div>
      <button onClick={handleBack}>atrás</button>
      <div>
        <img src={profile.image} alt="foto de perfil" width={"150px"} />
        <h2>Username: {profile.username}</h2>
        <h3>Email: {profile.email}</h3>

      </div>
      <Link to={"/user-rutas"}>
        <button>
          Tus rutas
      </button>
      </Link>
      <Link to={"/user-rutas-fav"}>
        <button>
          Tus rutas favoritas
      </button>
      </Link>
      

    </div>
  )
}

export default UserProfile