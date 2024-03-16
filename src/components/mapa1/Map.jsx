import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mapdata from "../../../utils/mapdata";

function Map() {
    return (
        <div>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 2800,
                    center: [-2, 39.25]
                }}
                fill="white"
                stroke="#045474"
                strokeWidth={3}
            >
                <Geographies geography={mapdata.data}>
                    {(geographies) => {
                        return geographies.geographies.map((geo) => {
                            const provinciaName = geo.properties.NAME_2;
                            return (
                                <Geography
                                    onClick={() => console.log(provinciaName)}
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        hover: {
                                            fill: "#FF331F"
                                        }
                                    }}
                                />
                            );
                        });
                    }}
                </Geographies>
            </ComposableMap>
        </div>
    );
}

export default Map;
