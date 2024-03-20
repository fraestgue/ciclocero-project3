import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service/config.service";
import CrearMapaRutaLeaflet from "./CrearMapaRutaLeaflet";
import provinciasJson from "../assets/data/comunidades.json";
import FotoRuta from "./FotoRuta";

function FormCrearRuta() {
    // console.log(provinciasJson)
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [distanciaEnKm, setDistanciaenKm] = useState(0);
    const [desnivelEnM, setDesnivelEnM] = useState(0);
    const [duracionEnHoras, setDuracionEnHoras] = useState(0);
    const [modalidad, setModalidad] = useState("");
    const [provincia, setProvincia] = useState("");

    //const [creador, setCreador] = useState();
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
            provincia,
            // creador, // esto no viene del front
            image,
            coordinatesStart,
            coordinatesEnd
        };

        try {
            const response = await service.post("/rutas", nuevaRuta);
            console.log(response);
            navigate("/rutas");
        } catch (error) {
            console.log(error);
            navigate("/error500");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmitRuta}>
                <label> Nombre de la ruta: </label>
                <input
                    required={true}
                    type="text"
                    name="name"
                    onChange={handleName}
                    value={name}
                />

                <label> Dificultad de la ruta: </label>
                <select
                    required={true}
                    name="dificultad"
                    onChange={handleDifficulty}
                    value={difficulty}
                >
                    <option value="">Dificultad</option>
                    <option value="fácil">fácil</option>
                    <option value="media">media</option>
                    <option value="difícil">difícil</option>
                    <option value="profesional">profesional</option>
                </select>

                <label> Distancia: </label>
                <input
                    type="number"
                    name="distancia"
                    onChange={handleDistanciaEnKm}
                    value={distanciaEnKm}
                />

                <label> Desnivel: </label>
                <input
                    type="number"
                    name="desnivel"
                    onChange={handleDesnivelEnM}
                    value={desnivelEnM}
                />

                <label> Duración: </label>
                <input
                    type="number"
                    name="duracion"
                    onChange={handleDuracionEnHoras}
                    value={duracionEnHoras}
                />

                <label> Modalidad de la ruta: </label>
                <select
                    name="modalidad"
                    onChange={handleModalidad}
                    value={modalidad}
                >
                    <option value="">Modalidad</option>
                    <option value="montaña">montaña</option>
                    <option value="urbano">urbano</option>
                    <option value="carretera">carretera</option>
                    <option value="gravel">gravel</option>
                </select>

                <label> Provincia: </label>
                <select
                    name="provincia"
                    onChange={handleProvincia}
                    value={provincia}
                >
                    <option value="">provincias</option>
                    {provinciasJson.provincias.map((eachProvincia) => {
                        return (
                            <option key={eachProvincia} value={eachProvincia}>
                                {eachProvincia}
                            </option>
                        );
                    })}
                </select>

                <FotoRuta setImage={setImage} image={image} />

                <button>Crear ruta</button>
            </form>

            <CrearMapaRutaLeaflet
                setCoordinatesStart={setCoordinatesStart}
                setCoordinatesEnd={setCoordinatesEnd}
            />
        </div>
    );
}

export default FormCrearRuta;
