import React from "react";
import btnAtras from "../assets/btn-atras.png";

function CrearRuta() {
    return (
        <div>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>

            <p>CrearRuta</p>
        </div>
    );
}

export default CrearRuta;
