import React from "react";
import btnAtras from "../assets/btn-atras.png";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import FormCrearRuta from "../components/FormCrearRuta";

function CrearRuta() {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    return (
        <div>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>
            <p>CrearRuta</p>
            <FormCrearRuta />
        </div>
    );
}

export default CrearRuta;
