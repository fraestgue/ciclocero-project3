import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const handleName = (event) => setName(event.target.value);
    const handleDifficulty = (event) => setDifficulty(event.target.value);
    const handleDistanciaEnKm = (event) => setDistanciaenKm(event.target.value);
    const handleDesnivelEnM = (event) => setDesnivelEnM(event.target.value);

    return <div>FormCrearRuta</div>;
}

export default FormCrearRuta;
