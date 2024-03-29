import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../service/config.service";
import btnAtras from "../assets/btn-atras.png";
import Spinner from "../components/Spinner";

function Rutas() {
    const [rutas, setRutas] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getRutas();
    }, []);

    const getRutas = async () => {
        try {
            const response = await service.get("/rutas");

            setRutas(response.data);
        } catch (error) {
            navigate("/error500");
        }
    };

    if (rutas === null) {
        return <Spinner />;
    }

    const handleBack = () => navigate(-1);

    return (
        <div className="rutas">
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>
            <div className="card-container2">
                {rutas.map((eachRuta) => {
                    return (
                        <Link to={`/rutas/${eachRuta._id}`} key={eachRuta._id}>
                            <div className="card2">
                                <h3>{eachRuta.name}</h3>
                                <img
                                    src={eachRuta.image}
                                    alt="imagen ruta"
                                    width={"150px"}
                                />
                                <h4>Dificultad: {eachRuta.difficulty}</h4>
                                <h4>Modalidad: {eachRuta.modalidad}</h4>
                                <p>
                                    Provincia:{" "}
                                    {eachRuta.provincia[0].toUpperCase() +
                                        eachRuta.provincia.slice(1)}
                                </p>
                                <p>Km: {eachRuta.distanciaEnKm}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Rutas;
