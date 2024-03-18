import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mapdata from "../../../utils/mapdata";
import { Link } from "react-router-dom";

function Map() {
    return (
        <div>
            <p>
                <strong>
                    <u>Elige provincia para ver sus rutas</u>
                </strong>
            </p>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 2800,
                    center: [-2, 39.25]
                }}
                fill="white"
                stroke="#045474"
                strokeWidth={2}
            >
                <Geographies geography={mapdata.data}>
                    {(geographies) => {
                        return geographies.geographies.map((geo) => {
                            const provinciaName = geo.properties.NAME_2;
                            return (
                                // Este link es para llevar a la pagina de rutas por provincia al pinchar en el mapa
                                <Link
                                    to={`/rutas/provincia/${provinciaName}`}
                                    key={geo.rsmKey}
                                >
                                    <Geography
                                        onClick={() =>
                                            console.log(provinciaName)
                                        }
                                        geography={geo}
                                        style={{
                                            hover: {
                                                fill: "#FF331F"
                                            }
                                        }}
                                    />
                                    //{" "}
                                </Link>
                            );
                        });
                    }}
                </Geographies>
            </ComposableMap>
        </div>
    );
}

export default Map;
