import React from "react";
import Spinner from "../../components/Spinner";

function Error500() {
    return (
        <div>
            <Spinner />
            <h1>
                ERROR AL CONECTAR CON EL SERVIDOR. VUELVE A INTENTARLO EN UNOS
                MINUTOS
            </h1>
        </div>
    );
}

export default Error500;
