import React from "react";
import btnAtras from "../assets/btn-atras.png";
import { useNavigate } from "react-router-dom";
import CrearMapaRuta from "../components/CrearMapaRuta";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

function CrearRuta() {
    const navigate = useNavigate();

    const position = [51.505, -0.09];

    const handleBack = () => navigate(-1);

    return (
        <div>
            <button onClick={handleBack} className="btn-atras">
                <img src={btnAtras} alt="atras" width="25px" />
            </button>
            <p>CrearRuta</p>
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: "100vh" }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CrearMapaRuta />
            </MapContainer>
            );
        </div>
    );
}

export default CrearRuta;
