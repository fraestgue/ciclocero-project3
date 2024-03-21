import React from "react";
import service from "../service/config.service";
import { useNavigate, useParams } from "react-router-dom";

function BorrarReseña(props) {
    const params = useParams();
    const navigate = useNavigate();

    const handleRemoveReview = async () => {
        try {
            await service.delete(`/reviews/${props.review._id}`);
            const responseReseñas = await service.get(
                `/reviews/rutas/${params.rutaId}`
            );

            props.setReview(responseReseñas.data);
        } catch (error) {
            navigate("/error500");
        }
    };
    return (
        <div>
            <button onClick={handleRemoveReview}>Borrar</button>
        </div>
    );
}

export default BorrarReseña;
