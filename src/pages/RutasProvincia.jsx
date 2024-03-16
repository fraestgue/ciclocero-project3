import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../service/config.service";

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
        } catch (error) {
            // navigate("/error500");
            console.log(error);
        }
    };

    return <div>RutasProvincia</div>;
}

export default RutasProvincia;
