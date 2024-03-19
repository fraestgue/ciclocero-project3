import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";

function FormCrearRuta() {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [difficulty, setDifficulty] = useState();
    const [distanciaEnKm, setDistanciaenKm] = useState();
    const [desnivelEnM, setDesnivelEnM] = useState();
    const [duracionEnHoras, setDuracionEnHoras] = useState();
    const [modalidad, setModalidad] = useState();
    const [circular, setCircular] = useState();
    const [comunidad, setComunidad] = useState();
    const [provincia, setProvincia] = useState();
    const [creador, setCreador] = useState();
    const [image, setImage] = useState();
    const [coordinatesStart, setCoordinatesStart] = useState();
    const [coordinatesEnd, setCoordinatesEnd] = useState();

    const handleName = (event) => setName(event.target.value);
    const handleDifficulty = (event) => setDifficulty(event.target.value);
    const handleDistanciaEnKm = (event) => setDistanciaenKm(event.target.value);
    const handleDesnivelEnM = (event) => setDesnivelEnM(event.target.value);
    const handleDuracionEnHoras = (event) =>
        setDuracionEnHoras(event.target.value);
    const handleModalidad = (event) => setModalidad(event.target.value);
    const handleCircular = (event) => setCircular(event.target.value);
    const handleComunidad = (event) => setComunidad(event.target.value);
    const handleProvincia = (event) => setProvincia(event.target.value);

    const handleSubmitRuta = async (event) => {
        event.preventDefault();

        const nuevaRuta = {
            name,
            difficulty,
            distanciaEnKm,
            desnivelEnM,
            duracionEnHoras,
            modalidad,
            circular,
            comunidad,
            provincia,
            creador,
            image,
            coordinatesStart,
            coordinatesEnd
        };

        try {
            const response = await service.post("/rutas", nuevaRuta);
            console.log(response);
        } catch (error) {
            console.log(error);
            navigate("/error500");
        }
    };

    return <div></div>;
}

export default FormCrearRuta;
