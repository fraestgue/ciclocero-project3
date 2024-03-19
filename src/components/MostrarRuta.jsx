import React from "react";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

function MostrarRuta(props) {
    const map = useMap();
    const {detallesRuta, setDetallesRuta, setClickedPosition} = props

    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            // waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
            // waypoints: [L.latLng(...detallesRuta.coordinatesStart), L.latLng(...detallesRuta.coordinatesEnd
                // )],
            routeWhileDragging: false,
            lineOptions: {addWaypoints: false},
            show:false,
            plan: L.Routing.plan([L.latLng(...detallesRuta.coordinatesStart), L.latLng(...detallesRuta.coordinatesEnd)], {draggableWaypoints: false,
            addWaypoints: false,})
            
        }).addTo(map);
        console.log(routingControl);
        return () => map.removeControl(routingControl);
    }, [map]);

    return null;
}

export default MostrarRuta;
