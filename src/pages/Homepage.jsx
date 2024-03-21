import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MapContainer from "../components/mapaDeProvincias/MapContainer";
import globalStyle from "../globalStyle.module.css";
import Carrousel from "../components/Carrousel";


function Homepage() {
    return (
        <div className="homepage">
            
            <Carrousel />
            <hr />
            <Link to={"/rutas"}>
                <button className="btn-rutas">Ver todas las rutas</button>
            </Link>

            <div className={globalStyle.mapContainerWrapper}>
                <MapContainer />
            </div>
        </div>
    );
}

export default Homepage;
