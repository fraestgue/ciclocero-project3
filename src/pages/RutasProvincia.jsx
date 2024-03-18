import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../service/config.service";
import btnAtras from "../assets/btn-atras.png";

function RutasProvincia() {
    const [rutasProvincia, setRutasProvincia] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    console.log(params);

    useEffect(() => {
        getRutasProvincia();
    }, []);

    const getRutasProvincia = async () => {
        try {
            const response = await service.get(
                `/rutas?provincia=${params.provincia}`
            );
            console.log(response.data);
            setRutasProvincia(response.data);
        } catch (error) {
            navigate("/error500");
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>

            <p>RutasProvincia</p>
            {/* Esto sería para cuando vaya bien y muestre las rutas de cada provincia */}
            {/* <div className="card-container">
                {rutasProvincia.map((eachRuta) => {
                    return (
                        <Link to={`/rutas/${eachRuta._id}`} key={eachRuta._id}>
                            <div className="card">
                                <h3>{eachRuta.name}</h3>
                                <img
                                    src={eachRuta.image}
                                    alt="imagen ruta"
                                    width={"150px"}
                                />
                                <h4>Dificultad: {eachRuta.difficulty}</h4>
                                <h4>Modalidad: {eachRuta.modalidad}</h4>
                                <p>Provincia: {eachRuta.provincia}</p>
                                <p>Km: {eachRuta.distanciaEnKm}</p>
                            </div>
                        </Link>
                    );
                })}
            </div> */}
        </div>
    );
}

export default RutasProvincia;
