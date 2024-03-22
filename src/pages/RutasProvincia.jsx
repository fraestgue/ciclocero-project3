import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../service/config.service";
import btnAtras from "../assets/btn-atras.png";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function RutasProvincia() {
    const [rutasProvincia, setRutasProvincia] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getRutasProvincia();
    }, []);

    const getRutasProvincia = async () => {
        try {
            const response = await service.get(
                `/rutas/query?queryValue=${params.provincia}`
            );

            setRutasProvincia(response.data);
        } catch (error) {
            navigate("/error500");
        }
    };

    if (rutasProvincia === null) {
        return <Spinner />;
    }

    const handleBack = () => navigate(-1);

    return (
        <div>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>

            <div className="card-container2">
                {rutasProvincia.length === 0 ? (
                    <h3>Aun no hay rutas en esta provincia</h3>
                ) : (
                    rutasProvincia.map((eachRuta) => {
                        return (
                            <Link
                                to={`/rutas/${eachRuta._id}`}
                                key={eachRuta._id}
                            >
                                <div className="card2">
                                    <h3>{eachRuta.name[0].toUpperCase() +
                                            eachRuta.name.slice(1)}</h3>
                                    <img
                                        src={eachRuta.image}
                                        alt="imagen ruta"
                                        width={"150px"}
                                    />
                                    <h4>Dificultad: {eachRuta.difficulty[0].toUpperCase() +
                                            eachRuta.difficulty.slice(1)}</h4>
                                    <h4>Modalidad: {eachRuta.modalidad[0].toUpperCase() +
                                            eachRuta.modalidad.slice(1)}</h4>
                                    <p>
                                        Provincia:{" "}
                                        {eachRuta.provincia[0].toUpperCase() +
                                            eachRuta.provincia.slice(1)}
                                    </p>
                                    <p>Km: {eachRuta.distanciaEnKm}</p>
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default RutasProvincia;
