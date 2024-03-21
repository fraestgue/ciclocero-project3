import React from "react";
import { useNavigate } from "react-router-dom";
import btnAtras from "../../assets/btn-atras.png";

function Error404() {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    return (
        <div className="erro404">
            <h1>VAYA! PARECE QUE TE HAS PERDIDO. VUELVE AL INICIO</h1>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>
        </div>
    );
}

export default Error404;
