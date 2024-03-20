import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../service/config.service";

function BorrarRuta() {
    const params = useParams();
    const navigate = useNavigate();

    const handleRemoveRuta = async () => {
        try {
            await service.delete(`/rutas/${params.rutaId}`);
            navigate("/rutas");
        } catch (error) {
            console.log(error);
            navigate("/error500");
        }
    };

    return (
        <div>
            <button onClick={handleRemoveRuta}>Eliminar ruta</button>
        </div>
    );
}

export default BorrarRuta;
