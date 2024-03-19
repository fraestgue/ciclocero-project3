import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";

function FormCrearReseña(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleTitle = (event) => setTitle(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nuevaReseña = {
            title,
            description,
            //creador: req.payload._id,
            ruta: props.detallesRuta._id
        };
        console.log(props.detallesRuta)

        try {
            const response = await service.post("/reviews", nuevaReseña);
            console.log(response)
            //...spread para agregar la nueva review al array y que se actualice el setreview al hacer el submit
            props.setReview(preArrReview => [...preArrReview, response.data])
            setTitle(response.data.title)
            setDescription(response.data.description)
            props.handleToggleUpdateForm(false)

        } catch (error) {
            navigate("/error500");
        }
    };

    return (
        <div>
            <div>
              <form onSubmit={handleSubmit}>
                <label>Titulo </label>
                <input
                    type="text"
                    name="title"
                    onChange={handleTitle}
                />
                <label>Descripción </label>
                <input
                    type="text"
                    name="description"
                    onChange={handleDescription}
                />
                <button>Guarda tus cambios</button>
                </form>
            </div>
        </div>
    );
}

export default FormCrearReseña;
