import React from "react";
import service from "../service/config.service";
import { useNavigate, useParams } from "react-router-dom";

function BorrarReseña(props) {
    const params = useParams()
    console.log(params)
    const navigate = useNavigate();
   let reviewsArr = props.review
   console.log(reviewsArr)

    const handleRemoveReview = async () => {
        console.log(props.review)
        try {
            await service.delete(`/reviews/${props.review._id}`);
            const responseReseñas = await service.get(
                `/reviews/rutas/${params.rutaId}`
            );
            // reviewsArr.filter((eachReview, index) => {
            //     if (eachReview._id === props.review._id){
            //         reviewsArr
            //     }
            // })
            props.setReview(responseReseñas.data);
        } catch (error) {
            console.log(error)
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
